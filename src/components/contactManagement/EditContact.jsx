import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppBar from '../appBar/AppBar';
import { editContact } from '../../api-client/api-client';
import ContactForm, {useContactFormFields} from './ContactForm';
import TextButton from '../common/TextButton';
import OverflowMenu from '../appBar/OverflowMenu';

function EditContact({ contacts, fetchContacts }) {
    const oldContact = contacts[useParams().contactId];
    const navigate = useNavigate();
    const {contact: newContact, binders} = useContactFormFields(oldContact);

    const [emailError, setEmailError] = useState(false);
    function isInvalidEmail(email) {
        for (const u of Object.values(contacts)) {
            if (oldContact.id === u.id) {
                continue;
            }
            if (email === u.email) {
                return true;
            }
        }
        return false;
    }

    async function onSubmit() {
        if (isInvalidEmail(newContact.email)) {
            setEmailError(true);
        } else {
            await editContact(newContact);
            await fetchContacts();
            navigate('/');
        }
    }

    return <ContactForm contact={oldContact} binders={binders} emailError={emailError}>
        <AppBar title='Edit contact' goBack='/'>
            <TextButton value='Save' type='button' onClick={onSubmit} />
            <OverflowMenu contact={oldContact} fetchContacts={fetchContacts} />
        </AppBar>
    </ContactForm>;
}

export default EditContact;
