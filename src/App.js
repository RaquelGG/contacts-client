import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import UserList from './components/userList/UserList';
import UserDetails from './components/userDetails/UserDetails'
import {getUserList} from './api/conection'
  

function App() {
    const [userList, setUserList] = useState(null);
    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        async function fetchUserList() {
          setProcessing(true);
          setUserList(await getUserList());
          setProcessing(false);
        }
        fetchUserList();
      }, []);


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserList userList={userList} processing={processing} />} />
                <Route path="user/:userId" element={<UserDetails userList={userList} />} />
                <Route path="user/new" element={<UserDetails isNewUser={true} />} />
                <Route path="*" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    );
}



export default App;