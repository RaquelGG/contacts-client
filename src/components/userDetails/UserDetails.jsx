import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useInput } from './useInput'
import ActionBar from './ActionBar'
import { editUser, addUser } from '../../api/conection'


function UserDetails({ userList, isNewUser }) {
    const user = userList[useParams().userId];
    const [emailError, setEmailError] = useState(false);
    const { value: name, bind: bindName } = useInput(user.name);
    const { value: surname, bind: bindSurname } = useInput(user.surname);
    const { value: email, bind: bindEmail } = useInput(user.email);
    const { value: tel, bind: bindtel } = useInput(user.tel);

    const saveUser = (event) => {
        event.preventDefault();
        if (!isValidEmail()) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
        (async () => {
            if (isNewUser) {
                await addUser(name, surname, email, tel);
            } else {
                await editUser(name, surname, email, tel);
            }
        })();
    }

    function isValidEmail() {
        for (const u of userList) {
            if (user.id === u.id) {
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
            <Form onSubmit={saveUser}>
                <ActionBar isNewUser={isNewUser} user={user}>
                    <SaveButton type="submit" value="Save" />
                </ActionBar>
                <Label>
                    Name
                    <InputText type="text" {...bindName}
                        placeholder={user.name}
                        required />
                </Label>
                <Label>
                    Surname
                    <InputText type="text" {...bindSurname}
                        placeholder={user.surname}
                        required />
                </Label>
                <Label>
                    E-Mail
                    <InputText type="email" {...bindEmail}
                        placeholder={user.email}
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
                        placeholder={user.tel}
                        pattern='[+][0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}'
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

export default UserDetails;