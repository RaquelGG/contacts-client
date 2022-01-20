import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import ContactList from './contactList/ContactList';
import ChangeLog from './changeLog/ChangeLog';
import { getContacts } from '../api-client/api-client';
import Spinner from './common/Spinner';
import EditContact from './contactManagement/EditContact';
import AddContact from './contactManagement/AddContact';
import PopError from './common/PopError';

function App() {
    const [contacts, setContacts] = useState(null);
    const [processing, setProcessing] = useState(true);

    async function fetchContacts() {
        setContacts(await getContacts());
        setProcessing(false);
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return <BrowserRouter>
        {processing
            ? <Routes>
                <Route path='contact/changelog/:contactId' element={<ChangeLog />} />
                <Route path='*' element={<Spinner />} />
            </Routes>
            : contacts
                ? <Routes>
                    <Route path='/' element={<ContactList contacts={contacts} />} />
                    <Route path='contact/:contactId' element={
                        <EditContact contacts={contacts} fetchContacts={fetchContacts} />
                    } />
                    <Route path='contact/new' element={
                        <AddContact contacts={contacts} fetchContacts={fetchContacts} />
                    } />
                    <Route path='contact/changelog/:contactId' element={<ChangeLog />} />
                    <Route path='*' element={<ContactList contacts={contacts} />} />
                </Routes>
                : <PopError errorMessage='Failed to load. No response from the server' />
        }
    </BrowserRouter>;
}



export default App;