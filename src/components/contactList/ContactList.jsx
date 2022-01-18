import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import PopError from '../PopError'
import ContactIcon from './ContactIcon'
import AddContactButton from './AddContactButton'
import sadIcon from '../../img/sad.png'
import AppBar from '../AppBar/AppBar'

function ContactList({ contacts }) {
  return (
    <Wrapper>
      <AppBar title="Contact list" canGoBack={false} />
      {contacts ? (
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
      ) : (
        <>
          
          <VerticalAlignCenter>
            <Img src={sadIcon} alt="Depression icons created by max.icons - Flaticon" longdesc="https://www.flaticon.com/free-icons/depression" />
          </VerticalAlignCenter>
          <PopError errorMessage="Failed to load. No response from the server" />
        </>
      )}
      <AddContactButton />
    </Wrapper>
  );
}

/* STYLED COMPONENTS */
const Wrapper = styled.div``

const List = styled.ol`
  padding: 0;
`;

const ListItem = styled(Link)`
  display: flex;
  padding: 16px 40px;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    background-color: #00000014;
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
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Img = styled.img`
  margin: auto;
  width: 200px;
`

export default ContactList;
