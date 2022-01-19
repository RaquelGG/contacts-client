import React from 'react';
import styled from 'styled-components';

function ConfirmationPopPup({ children, title, description }) {
    return <Box>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Bottom>
            {children}
        </Bottom>
    </Box>;
}

const Box = styled.div`
    margin: auto;
    display: flex;
    background-color: #1b1b1b;
    width: min-content;
    min-width: 400px;
    max-width: 600px;
    border-radius: 7%;
    flex-direction: column;
    padding: 32px;
`;

const Title = styled.h1`
    color: white;
`;
const Text = styled.p`
    color: white;
    margin: 24px 0;
    font-size: 1.1rem;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;



export default ConfirmationPopPup;
