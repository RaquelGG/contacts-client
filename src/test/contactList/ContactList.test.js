import React from 'react';
import { screen } from '@testing-library/react';
import { renderWrapped, CONTACTS } from '../utils';
import ContactList from '../../components/contactList/ContactList';

test('renders the contacts', () => {
    renderWrapped(<ContactList contacts={CONTACTS} />);

    Object.values(CONTACTS).map((contact) => {
        const fullName = screen.getByText(`${contact.name} ${contact.surname}`);
        expect(fullName).toBeInTheDocument();
    });
});

test('render the empty list', () => {
    renderWrapped(<ContactList contacts={{}} />);
    expect(screen.getByAltText('The girl is sad because the list is empty')).toBeInTheDocument();
});