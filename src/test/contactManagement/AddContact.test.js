import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWrapped, CONTACTS, waitForAsync } from '../utils';
import AddContact from '../../components/contactManagement/AddContact';
import { addContact } from '../../api-client/api-client';

jest.mock('../../api-client/api-client');

const NEW_CONTACT = {
    name: 'Jorge',
    surname: 'Vázquez',
    email: 'jova@mail.com',
    tel: '78459842',
};

const EXISTING_EMAIL = 'mfernandez@gmail.com';

test('renders the contacts', async () => {
    const fetchContactsSpy = jest.fn();
    renderWrapped(<AddContact contacts={CONTACTS} fetchContacts={fetchContactsSpy} />);

    const nameField = screen.getByLabelText(/Name/);
    userEvent.type(nameField, NEW_CONTACT.name);
    const surnameField = screen.getByLabelText(/Surname/);
    userEvent.type(surnameField, NEW_CONTACT.surname);
    const emailField = screen.getByLabelText(/E-Mail/);
    userEvent.type(emailField, NEW_CONTACT.email);
    const telField = screen.getByLabelText(/Phone Number/);
    userEvent.type(telField, NEW_CONTACT.tel);

    userEvent.click(screen.getByText(/Save/));
    
    await waitForAsync();

    expect(addContact).toHaveBeenCalledWith(expect.objectContaining({
        name: NEW_CONTACT.name,
        surname: NEW_CONTACT.surname,
        email: NEW_CONTACT.email,
        tel: NEW_CONTACT.tel,
    }));
    expect(fetchContactsSpy).toHaveBeenCalledTimes(1);
});

test('render add contact with an email already taken', async () => {
    renderWrapped(<AddContact contacts={CONTACTS} />);

    const nameField = screen.getByLabelText(/Name/);
    userEvent.type(nameField, NEW_CONTACT.name);
    const surnameField = screen.getByLabelText(/Surname/);
    userEvent.type(surnameField, NEW_CONTACT.surname);
    const emailField = screen.getByLabelText(/E-Mail/);
    userEvent.type(emailField, EXISTING_EMAIL);
    const telField = screen.getByLabelText(/Phone Number/);
    userEvent.type(telField, NEW_CONTACT.tel);

    userEvent.click(screen.getByText(/Save/));

    await waitForAsync();

    expect(screen.getByText('The specified email is already in use')).toBeInTheDocument();
});