import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import PopError from '../PopError'
import Loading from '../Loading'
import UserIcon from './UserIcon'
import AddUserButton from './AddUserButton'

function UserList({ userList, processing }) {
  return (
    <Wrapper>
      {userList ? (
        <List>
          {userList.map((user) => (
            <ListItem
              key={user.id}
              to={`/user/${user.id}`}
            >
              <UserIcon user={user} />
              <Name>{user.name} {user.surname}</Name>
            </ListItem>
          ))}
        </List>
      ) : (
        processing ? (
          <Loading />
        ) : (
          <PopError errorMessage="Failed to load" />
        )
      )}
      <AddUserButton />
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

export default UserList;
