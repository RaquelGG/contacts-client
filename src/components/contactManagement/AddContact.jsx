import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '../appBar/AppBar';
import { addContact } from '../../api-client/api-client';
import ContactForm, {useContactFormFields} from './ContactForm';
import TextButton from '../common/TextButton';

function AddContact({contacts, fetchContacts}) {
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();
    const {contact, binders} = useContactFormFields();
    function isInvalidEmail(email) {
        for (const u of Object.values(contacts)) {
            if (email === u.email) {
                return true;
            }
        }
        return false;
    }
    async function onSubmit() {
        if (isInvalidEmail(contact.email)) {
            setEmailError(true);
        } else {
            await addContact(contact);
            await fetchContacts();
            navigate('/');
        }
    }
    return (
        <ContactForm emailError={emailError} binders={binders}>
            <AppBar title="Create contact" goBack="/">
                <TextButton value="Save" type="button" onClick={onSubmit} />
            </AppBar>
        </ContactForm>
    );
}

export default AddContact;
