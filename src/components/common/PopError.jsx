import React from 'react';
import styled from 'styled-components';


function PopError({errorMessage}) {
    return(
        <Wrapper>
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </Wrapper>
    );
}
/* STYLED COMPONENTS */
const Wrapper = styled.div`
    background-color: #ff4040;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: fit-content;
    padding: 16px;
`

const ErrorMessage = styled.p`
    color: black;
`

export default PopError;