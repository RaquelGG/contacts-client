import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from './IconButton'
import ConfirmationPopPup from './ConfirmationPopPup'
import TextButton from '../TextButton';
import { deleteContact } from '../../api-client/api-client';

import overFlowMenuIcon from '../../img/more_vert_24dp.svg'

function OverflowMenu({ contact, fetchContacts }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isConfirmationVisible, setRemoveVisible] = useState(false);
    const navigate = useNavigate();

    async function onDelete(contact) {
        await deleteContact(contact.id);
        await fetchContacts();
        navigate('/');
    }

    const confirmationPopUp = (
        <CenterAligner onClick={() => {setRemoveVisible(false)}}>
            <ConfirmationPopPup title={`Delete ${contact.email}`} description="The contact and all its changes will be deleted. Are you sure?" >
                <PopUpButton type="button" value="Remove" onClick={() => {onDelete(contact)}} />
                <PopUpButton type="button" value="Cancel" onClick={() => {setRemoveVisible(false)}}/>
            </ConfirmationPopPup>
        </CenterAligner>
    );

    return (
        <>
            {isConfirmationVisible
                ? confirmationPopUp
                : null
            }
            <IconButton src={overFlowMenuIcon} onClick={() => { setIsMenuVisible(true) }} />
            <Background isMenuVisible={isMenuVisible} onClick={() => setIsMenuVisible(false)} />
            <List isMenuVisible={isMenuVisible}>
                <Option onClick={() => {setRemoveVisible(true)}}>Remove contact</Option>
                <StyledLink to={`/contact/changelog/${contact.id}`}>
                    <Option>Open change log</Option>
                </StyledLink>
            </List>
        </>
    );
}

/* STYLED COMPONENTS */
const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: hsla(0, 0, 0, 0);
    display: ${({ isMenuVisible }) =>
        isMenuVisible ? 'block' : 'none'
    };
    left: 0;
    top: 0;
`;

const List = styled.ul`
    background-color: #424242;
    width: fit-content;
    height: fit-content;
    position: fixed;
    top: 8px;
    list-style-type: none;
    border-radius: 10px;
    padding-inline-start: 0;
    display: ${({ isMenuVisible }) =>
        isMenuVisible ? 'block' : 'none'
    };
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Option = styled.li`
    color: white;
    margin: 32px;
    width: 100%;

    &:hover {
        cursor: pointer;
        text-decoration: underline
    }
`;

const CenterAligner = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background: #0000003b;
    display: flex;
`;

const PopUpButton = styled(TextButton)`
    background-color: inherit;
    color: #ffffff;
    border: 1px solid #75b6c2;
`;

export default OverflowMenu;