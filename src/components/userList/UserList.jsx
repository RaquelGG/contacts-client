import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import PopError from '../PopError'
import LoadingList from './LoadingList'
import UserIcon from './UserIcon'
import addUserIcon from '../../img/person_add_alt_black_24dp.svg';

function UserList({userList, processing}) {
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
          <LoadingList/>
        ) : (
          <PopError errorMessage="Failed to load" />
        )
      )}
      <AddUser/>
    </Wrapper>
  );
}

/* STYLED COMPONENTS */
const Wrapper = styled.div`
    
`

const List = styled.ol`
  padding: 0;
`

const ListItem = styled(Link)`
  display: flex;
  padding: 16px 40px;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    background-color: #00000014;
  }
`

const Name = styled.h2`
  margin-top: 4px;
  margin-left: 32px;
  font-weight: 400;
`

const AddUser = styled.button`
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 70px;
  height: 70px;
  background-color: #dae6ff;
  border-radius: 50%;
  background-image: url(${addUserIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  border: 2px solid #3567d3;
  box-shadow: 0px 3px 9px #00000059;

  &:active {
    box-shadow: 0px 0px 0px;
  }

  &:hover {
    cursor: pointer;
  }
`

export default UserList;
