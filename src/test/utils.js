import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export function renderWrapped(component) {
    return render(<MemoryRouter>
        <Routes>
            <Route path='*' element={component} />
        </Routes>
    </MemoryRouter>);
}

export async function waitForAsync() {
    await act(async () => {});
}

export const CONTACTS = {
    1: {
        id: 1,
        name: 'John',
        surname: 'Smith',
        email: 'johnsmith@gmail.com',
        tel: '123456789',
    },
    2: {
        id: 2,
        name: 'Laura',
        surname: 'Sanchez',
        email: 'lm12@gmail.com',
        tel: '45665411',
    },
    3: {
        id: 3,
        name: 'María',
        surname: 'Fernández',
        email: 'mfernandez@gmail.com',
        tel: '+41 123 45 67 89',
    },
};

export const MOCK_CHANGES = [
    {
        'id': 0,
        'date': '2022-01-18T17:10:29.000Z',
        'changedFields': {
            'name': 'Joel',
            'surname': 'Aguilera',
            'tel': '123456789',
            'email': 'johnsmith@gmail.com'
        }
    },
    {
        'id': 1,
        'date': '2022-01-20T17:10:29.000Z',
        'changedFields': {
            'name': 'John',
            'tel': '+41 012 34 56 78'
        }
    },
    {
        'id': 2,
        'date': '2022-01-18T15:10:29.000Z',
        'changedFields': {
            'surname': 'Smith'
        }
    }
];