import React from 'react';
import styled from 'styled-components';
import { useInput } from './contactDetails/useInput';


function ContactForm({ contact, onSubmit, emailError, children }) {
    const { value: name, bind: bindName } = useInput(contact?.name ?? '');
    const { value: surname, bind: bindSurname } = useInput(contact?.surname ?? '');
    const { value: email, bind: bindEmail } = useInput(contact?.email ?? '');
    const { value: tel, bind: bindtel } = useInput(contact?.tel ?? '');

    const saveContact = (event) => {
        event.preventDefault();
        onSubmit({
            name, surname, email, tel, id: contact?.id,
        });
    }

    return (
        <>
            <Form onSubmit={saveContact}>
            {children}
                <Label>
                    Name
                    <InputText type="text" {...bindName}
                        placeholder={contact?.name}
                        required />
                </Label>
                <Label>
                    Surname
                    <InputText type="text" {...bindSurname}
                        placeholder={contact?.surname}
                        required />
                </Label>
                <Label>
                    E-Mail
                    <InputText type="email" {...bindEmail}
                        placeholder={contact?.email}
                        required />
                    {
                        emailError ? (
                            <ErrorMessage>The specified email is already in use</ErrorMessage>
                        ) : null
                    }

                </Label>
                <Label>
                    Phone Number
                    <InputText type="tel" {...bindtel}
                        placeholder={contact?.tel}
                        pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$'
                        required />
                </Label>
            </Form>
        </>
    );
}

/* STYLED COMPONENTS */
const Form = styled.form`
    display: flex;
    margin-top: 64px;
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
`;

export default ContactForm;