import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import PopError from '../PopError'
import ContactIcon from './ContactIcon'
import AddContactButton from './AddContactButton'

function ContactList({ contacts }) {
  return (
    <Wrapper>
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
          <PopError errorMessage="Failed to load" />
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

export default ContactList;
