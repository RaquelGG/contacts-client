import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";


function UserDetails({userList, isNewUser}) {
    const user = userList[useParams().userId];
    
    function handleSubmit() {
        alert('A form was submitted');
    }

    return (
        
        <Wrapper>
            {user.name}
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name:
                    <InputText type="text" name="name" ></InputText>
                </Label>
                <SaveButton type="submit" value="Submit" />
            </Form>
            
            
        </Wrapper>
    );
}

/* STYLED COMPONENTS */
const Wrapper = styled.div`
`

const Form = styled.form`

`
const Label = styled.label`

`
const InputText = styled.input`

`

const SaveButton = styled.input`

`

export default UserDetails;