import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import AppBar from './AppBar/AppBar';
import { editContact } from '../api-client/conection'
import ContactForm from './ContactForm';
import TextButton from './TextButton'
import OverflowMenu from './AppBar/OverflowMenu';

function EditContact({contacts, fetchContacts}) {
    const contact = contacts[useParams().contactId];
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState(false);
    function isInvalidEmail(email) {
        for (const u of Object.values(contacts)) {
            if (contact.id === u.id) {
                continue;
            }
            if (email === u.email) {
                return true;
            }
        }
        return false;
    }
    async function onSubmit(contact) {
        if (isInvalidEmail(contact.email)) {
            setEmailError(true);
        } else {
            await editContact(contact);
            await fetchContacts();
            navigate('/');
        }
    }
    return (
        <ContactForm contact={contact} onSubmit={onSubmit} emailError={emailError}>
            <AppBar isNewContact={false} contact={contact}>
                <TextButton value="Save" />
                <OverflowMenu contact={contact} />
            </AppBar>
        </ContactForm>
    );
}

export default EditContact;
