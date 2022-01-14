import jsonUserList from './userList.json'
import changeLog from './changeLog.json'

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

export async function editUser(name, surname, email, tel) {

}

export async function addUser(name, surname, email, tel) {

}

export async function deleteUser(id) {

}

export async function getChangeLog(id) {
    try {
        //const response = await fetch('');
        //const userList = await response.json();
        const data = changeLog.changeLog;
        return data ? data: null;
    } catch (err) {
        console.error("Error obtaining the user change log: ", err);
        return null;
    }
}