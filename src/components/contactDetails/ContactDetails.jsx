import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useInput } from './useInput'
import ActionBar from './ActionBar'
import { editContact, addContact } from '../../api-client/conection'


function ContactDetails({ contacts, isNewContact }) {
    const contact = contacts[useParams().contactId];
    const [emailError, setEmailError] = useState(false);
    const { value: name, bind: bindName } = useInput(contact.name);
    const { value: surname, bind: bindSurname } = useInput(contact.surname);
    const { value: email, bind: bindEmail } = useInput(contact.email);
    const { value: tel, bind: bindtel } = useInput(contact.tel);

    const saveContact = (event) => {
        event.preventDefault();
        if (!isValidEmail()) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
        (async () => {
            if (isNewContact) {
                await addContact(name, surname, email, tel);
            } else {
                await editContact(name, surname, email, tel);
            }
        })();
    }

    function isValidEmail() {
        for (const u of contacts) {
            if (contact.id === u.id) {
                continue;
            }
            if (email === u.email) {
                return false;
            }
        }
        return true;
    }

    return (
        <Wrapper>
            <Form onSubmit={saveContact}>
                <ActionBar isNewContact={isNewContact} contact={contact}>
                    <SaveButton type="submit" value="Save" />
                </ActionBar>
                <Label>
                    Name
                    <InputText type="text" {...bindName}
                        placeholder={contact.name}
                        required />
                </Label>
                <Label>
                    Surname
                    <InputText type="text" {...bindSurname}
                        placeholder={contact.surname}
                        required />
                </Label>
                <Label>
                    E-Mail
                    <InputText type="email" {...bindEmail}
                        placeholder={contact.email}
                        required />
                    {
                        emailError ? (
                            <ErrorMessage>The specified email is already in use</ErrorMessage>
                        ) : (
                            <span></span>
                        )
                    }

                </Label>
                <Label>
                    Phone Number (e.g.: +34 123 45 67 89)
                    <InputText type="tel" {...bindtel}
                        placeholder={contact.tel}
                        pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$'
                        required />
                </Label>
            </Form>
        </Wrapper>
    );
}

/* STYLED COMPONENTS */
const Wrapper = styled.div`
    margin-top: 64px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 16px 48px;
    font-size: 1.2em;
    color: #3567d3;
    font-weight: 500;
`;
const InputText = styled.input`
    padding: 8px;
    margin-top: 4px;
    border: 2px solid #3567d3;
    border-radius: 5px;
`;

const ErrorMessage = styled.p`
    margin-top: 4px;
    color: #770000;
    font-size: 1rem;
`

const SaveButton = styled.input`
    border-radius: 15px;
    font-size: 1.1rem;
    color: #1441a1;
    border: none;
    background-color: #dde8ff;
    padding: 0 20px;
    font-weight: 500;
    height: 35px;

    &:hover {
        cursor: pointer;
    }
`;

export default ContactDetails;