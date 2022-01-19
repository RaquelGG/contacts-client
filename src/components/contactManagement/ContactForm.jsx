import React from 'react';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import { useInput } from './useInput';

export function useContactFormFields(contact) {
    const { value: name, bind: bindName } = useInput(contact?.name ?? '');
    const { value: surname, bind: bindSurname } = useInput(contact?.surname ?? '');
    const { value: email, bind: bindEmail } = useInput(contact?.email ?? '');
    const { value: tel, bind: bindTel } = useInput(contact?.tel ?? '');
    return {
        contact: {
            name, surname, email, tel, id: contact?.id,
        },
        binders: {
            bindName,            bindSurname, bindEmail, bindTel
        }
    };
}

function ContactForm({ contact, binders, emailError, children }) {
    const {bindName, bindSurname, bindEmail, bindTel} = binders;

    return (
        <>
            {children}
            <Wrapper>
                <Form>
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
                        <InputText type="tel" {...bindTel}
                            placeholder={contact?.tel}
                            pattern='^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$'
                            required />
                    </Label>
                </Form>
            </Wrapper>

        </>
    );
}

/* STYLED COMPONENTS */
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
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