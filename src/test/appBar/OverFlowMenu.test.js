import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWrapped, CONTACTS, waitForAsync } from '../utils';
import OverflowMenu from '../../components/appBar/OverflowMenu';
import { deleteContact } from '../../api-client/api-client';

jest.mock('../../api-client/api-client');

const CONTACT_ID = 1;

test('render overflow menu on remove -> confirmation', async () => {
    renderWrapped(<OverflowMenu contact={CONTACTS[CONTACT_ID]} />);

    userEvent.click(screen.getByText(/Remove contact/));

    await waitForAsync();

    expect(screen.getByText(`Delete ${CONTACTS[CONTACT_ID].email}`)).toBeInTheDocument();
});

test('render overflow menu on remove -> confirmation -> remove', async () => {
    const fetchContactsSpy = jest.fn();
    renderWrapped(<OverflowMenu contact={CONTACTS[CONTACT_ID]} fetchContacts={fetchContactsSpy} />);

    userEvent.click(screen.getByText(/Remove contact/));
    await waitForAsync();

    userEvent.click(screen.getByTestId(/removeButton/));
    await waitForAsync();

    expect(deleteContact).toHaveBeenCalledWith(CONTACTS[CONTACT_ID].id);
    expect(fetchContactsSpy).toHaveBeenCalledTimes(1);
});

test('render overflow menu on remove -> confirmation -> cancel', async () => {
    const fetchContactsSpy = jest.fn();
    renderWrapped(<OverflowMenu contact={CONTACTS[CONTACT_ID]} fetchContacts={fetchContactsSpy} />);

    userEvent.click(screen.getByText(/Remove contact/));
    await waitForAsync();

    userEvent.click(screen.getByTestId(/cancelButton/));
    await waitForAsync();

    expect(fetchContactsSpy).toHaveBeenCalledTimes(0);
});

