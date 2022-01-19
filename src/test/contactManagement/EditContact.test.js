import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWrapped, CONTACTS, waitForAsync } from '../utils';
import EditContact from '../../components/contactManagement/EditContact';
import { editContact } from '../../api-client/api-client';

const CONTACT_ID = 1;
const CONTACT_NAME = 'EUGENIO';
const CONTACT_EMAIL = 'mfernandez@gmail.com';

jest.mock('../../api-client/api-client');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        contactId: CONTACT_ID,
    }),
}));

test('render form to edit a specific contact', async () => {
    const fetchContactsSpy = jest.fn();
    renderWrapped(<EditContact contacts={CONTACTS} fetchContacts={fetchContactsSpy} />);

    const nameField = screen.getByLabelText(/Name/);
    userEvent.clear(nameField);
    userEvent.type(nameField, CONTACT_NAME);

    userEvent.click(screen.getByText(/Save/));
    await waitForAsync();

    expect(editContact).toHaveBeenCalledWith(expect.objectContaining({
        id: CONTACTS[CONTACT_ID].id,
        name: CONTACT_NAME,
        surname: CONTACTS[CONTACT_ID].surname,
        email: CONTACTS[CONTACT_ID].email,
        tel: CONTACTS[CONTACT_ID].tel,
    }));
    expect(fetchContactsSpy).toHaveBeenCalledTimes(1);
});

test('change the email to one already taken', async () => {
    renderWrapped(<EditContact contacts={CONTACTS} />);

    const emailField = screen.getByLabelText(/E-Mail/);
    userEvent.clear(emailField);
    userEvent.type(emailField, CONTACT_EMAIL);

    userEvent.click(screen.getByText(/Save/));
    await waitForAsync();

    expect(screen.getByText('The specified email is already in use'));
});