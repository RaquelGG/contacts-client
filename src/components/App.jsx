import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import ListItem from './ListItem';
import {getUserList} from '../api/conection';
import PopError from './PopError'

function App() {
  const [processing, setProcessing] = useState(true);
  const [userList, setUserList] = useState(null);

  async function getUserListAsync() {
    setUserList(await getUserList());
  }

  useEffect(() => {
    async function fetchData() {
      setProcessing(true);
      await getUserListAsync();
      setProcessing(false);
    }
    fetchData();
  }, []); 

  return (
    <Wrapper>
      {userList ? (
        <UserList>
          {userList.map((user) => (
            <ListItem>
              <Name>{user.name}</Name>
              <Surname>{user.surname}</Surname>
            </ListItem>
          ))}
        </UserList>
      ) : (
        processing ? (
          <PopError errorMessage="Failed to load" />
        ) : (
          <Loading/>
        )
      )}
    </Wrapper>
  );
}

/* STYLED COMPONENTS */
const Wrapper = styled.div`
    
`

export default App;
