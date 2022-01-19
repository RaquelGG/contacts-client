import React from 'react';
import { screen } from '@testing-library/react';
import { renderWrapped, MOCK_CHANGES, waitForAsync } from '../utils';
import ChangeLog from '../../components/changeLog/ChangeLog';

const CONTACT_ID = 1;


jest.mock('../../api-client/api-client', () => ({
    getChangeLog: () => MOCK_CHANGES,
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        contactId: CONTACT_ID,
    }),
}));

test('render change log', async () => {
    renderWrapped(<ChangeLog />);

    await waitForAsync();

    expect(screen.getByText(/Joel/)).toBeInTheDocument();
    expect(screen.getByText(/John/)).toBeInTheDocument();
    expect(screen.getByText(/123456789/)).toBeInTheDocument();
});
