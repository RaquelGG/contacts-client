import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from '../common/Wrapper';
import PopError from '../common/PopError';
import ContactIcon from './ContactIcon';
import AddContactButton from './AddContactButton';
import sadIcon from '../../img/sad.png';
import AppBar from '../appBar/AppBar';

function ContactList({ contacts }) {

    const emptyContacts = (
        <VerticalAlignCenter>
            <Img src={sadIcon}
                alt='The girl is sad because the list is empty'
            />
        </VerticalAlignCenter>);

    const generateContactList = (
        <List>
            {Object.entries(contacts).map(([id, contact]) =>
                <ListItem
                    key={id}
                    to={`/contact/${id}`}
                >
                    <ContactIcon contact={contact} />
                    <Name>{contact.name} {contact.surname}</Name>
                </ListItem>
            )}
        </List>
    );

    return <>
        <AppBar title='Contact list' />
        <Wrapper>
            {Object.keys(contacts).length === 0
                ? emptyContacts
                : contacts
                    ? generateContactList
                    : <PopError errorMessage='Failed to load. No response from the server' />
            }
            <AddContactButton />
        </Wrapper>
    </>;
}

/* STYLED COMPONENTS */
const List = styled.ol`
  padding: 0;
  width: 100%;
`;

const ListItem = styled(Link)`
  display: flex;
  padding: 16px 40px;
  text-decoration: none;
  color: #000000;
  width: 100%;
  border: 2px solid white;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    border: 2px solid #1441a1;
  }
`;

const Name = styled.h2`
  margin-top: 4px;
  margin-left: 32px;
  font-weight: 400;
`;

const VerticalAlignCenter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -92px;
`;

const Img = styled.img`
  margin: auto;
  width: 200px;
`;

export default ContactList;
