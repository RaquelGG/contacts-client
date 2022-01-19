import React from 'react';
import styled from 'styled-components';


function Wrapper({ children }) {
    return <Box>
        {children}
    </Box>;
}
export default Wrapper;

const Box = styled.div`
    max-width: 800px;
    //min-width: 500px;
    display: flex;
    justify-content: center;
    background-color: white;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 black;
    padding: 40px;
`;