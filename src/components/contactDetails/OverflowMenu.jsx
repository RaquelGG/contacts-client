import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function OverflowMenu({children, contact}) {
    
    return (
        <Wrapper>
            {children}
            <Option onClick={() => {}}>Remove contact</Option>
            <StyledLink to={`/contact/changelog/${contact.id}`}>
                <Option>Open change log</Option>
            </StyledLink>
        </Wrapper>
    );
}

/* STYLED COMPONENTS */
const Wrapper = styled.ul`
    background-color: #424242;
    width: fit-content;
    height: fit-content;
    position: fixed;
    right: 8px;
    top: 8px;
    padding: 16px;
    list-style-type: none;
    border-radius: 10px;

`;

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Option = styled.li`
    color: white;
    margin: 16px;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`

export default OverflowMenu;