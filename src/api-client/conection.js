const URL = "http://127.0.0.1:3000"

function prepareJson(user) {
    return JSON.stringify({
        name: user.name, 
        surname: user.surname, 
        email: user.email,
        tel: user.tel
    });
}

export async function getUsers() {
    try {
        const response = await fetch(`${URL}/contacts`, {
            "method": 'GET'
        });
        const users = await response.json();
        return users;

    } catch (err) {
        console.error(`Error getting user list:`, err);
        return null;
    }
}

export async function editUser(user) {
    try {
        await fetch(`${URL}/contacts/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: prepareJson(user)
        });
    } catch (err) {
        console.error(`Error editing user ${user.id}:`, err);
        return null;
    }
}

export async function addUser(user) {
    try {
        await fetch(`${URL}/contacts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: prepareJson(user)
        });
    } catch (err) {
        console.error(`Error adding user ${user.email}:`, err);
        return null;
    }
}

export async function deleteUser(id) {
    try {
        await fetch(`${URL}/contacts/${id}`, {
            method: 'DELETE'
        });
    } catch (err) {
        console.error(`Error deleting user ${id}:`, err);
        return null;
    }
}

export async function getChangeLog(id) {
    try {
        const response = await fetch(`${URL}/contacts/${id}/changes`, {
            method: 'GET',
        });
        const changeLog = await response.json();
        return changeLog;
    } catch (err) {
        console.error(`Error getting change log from user ${id}:`, err);
        return null;
    }
}