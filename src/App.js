import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ContactList from './components/contactList/ContactList';
import ContactDetails from './components/contactDetails/ContactDetails'
import ChangeLog from './components/contactDetails/changeLog/ChangeLog'
import { getContacts } from './api-client/conection'
import Spinner from './components/Spinner'


function App() {
  const [contacts, setContacts] = useState(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      setContacts(await getContacts());
      setProcessing(false);
    }
    fetchContacts();
  }, []);


  return <BrowserRouter>
    {processing ?
      <Routes>
        <Route path='contact/changelog/:contactId' element={<ChangeLog />} />
        <Route path='*' element={<Spinner />} />
      </Routes> : <Routes>
        <Route path='/' element={<ContactList contacts={contacts} />} />
        <Route path='contact/:contactId' element={<ContactDetails contacts={contacts} />} />
        <Route path='contact/new' element={<ContactDetails isNewContact={true} />} />
        <Route path='contact/changelog/:contactId' element={<ChangeLog />} />
        <Route path='*' element={<ContactList contacts={contacts} />} />
      </Routes>}
  </BrowserRouter>;
}



export default App;