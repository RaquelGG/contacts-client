import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from './AppBar/AppBar';
import { addContact } from '../api-client/api-client'
import ContactForm from './ContactForm';
import TextButton from './TextButton'

function AddContact({contacts, fetchContacts}) {
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();
    function isInvalidEmail(email) {
        for (const u of Object.values(contacts)) {
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
            await addContact(contact);
            await fetchContacts();
            navigate('/');
        }
    }
    return (
        <ContactForm onSubmit={onSubmit} emailError={emailError}>
            <AppBar canGoBack>
                <TextButton value="Save" />
            </AppBar>
        </ContactForm>
    );
}

export default AddContact;
