const URL = "http://127.0.0.1:3000"

function prepareJson(contact) {
    return JSON.stringify({
        name: contact.name, 
        surname: contact.surname, 
        email: contact.email,
        tel: contact.tel
    });
}

export async function getContacts() {
    try {
        const response = await fetch(`${URL}/contacts`, {
            "method": 'GET'
        });
        const contacts = await response.json();
        return contacts;

    } catch (err) {
        console.error(`Error getting contact list:`, err);
        return null;
    }
}

export async function editContact(contact) {
    try {
        await fetch(`${URL}/contacts/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: prepareJson(contact)
        });
    } catch (err) {
        console.error(`Error editing contact ${contact.id}:`, err);
        return null;
    }
}

export async function addContact(contact) {
    try {
        await fetch(`${URL}/contacts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: prepareJson(contact)
        });
    } catch (err) {
        console.error(`Error adding contact ${contact.email}:`, err);
        return null;
    }
}

export async function deleteContact(id) {
    try {
        await fetch(`${URL}/contacts/${id}`, {
            method: 'DELETE'
        });
    } catch (err) {
        console.error(`Error deleting contact ${id}:`, err);
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
        console.error(`Error getting change log from contact ${id}:`, err);
        return null;
    }
}