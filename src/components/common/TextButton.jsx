import React from 'react';
import styled from 'styled-components';

function TextButton({value, type, ...attrs}) {
    return <Button type={type} value={value} {...attrs} />;
}

const Button = styled.input`
    border-radius: 15px;
    font-size: 1.1rem;
    color: #1441a1;
    border: none;
    background-color: #dde8ff;
    padding: 0 20px;
    font-weight: 500;
    height: 35px;
    //margin: 0 16px;

    &:hover {
        cursor: pointer;
    }
`;

export default TextButton;
