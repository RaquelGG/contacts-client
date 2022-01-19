import React from 'react';
import styled from 'styled-components';

function getInitials(contact) {
    return (contact.name[0] + contact.surname[0]).toUpperCase();
}

function ContactIcon({ contact }) {
    return <Circle>
        <Initials>{getInitials(contact)}</Initials>
    </Circle>;

}

/* STYLED COMPONENTS */
const Circle = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #acc6ff;
    display: flex;
    
`;

const Initials = styled.h2`
    margin: 4px auto auto auto;
    color: white;
    font-weight: 400;
`;

export default ContactIcon;