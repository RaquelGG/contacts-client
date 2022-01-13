import jsonUserList from './userList.json'

//TODO: Send request to server
export async function getUserList() {
    try {
        //const response = await fetch('');
        //const userList = await response.json();
        const data = jsonUserList.userlist;
        return data ? data: null;
    } catch (err) {
        console.error("Error obtaining the user list: ", err);
        return null;
    }
    
}

export async function getUserChangeLog(id) {

}

export async function changeUserDetails(id, details, date) {

}

export async function deleteUser(id) {

}