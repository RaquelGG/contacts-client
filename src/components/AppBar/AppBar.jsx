import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton'

import arrowBackIcon from '../../img/arrow_back_24dp.svg';

function AppBar({ children, title, canGoBack}) {
    return <Wrapper>
        {<Nav>
            <Left>
                {canGoBack 
                    ? <IconButton src={arrowBackIcon} to='/' />
                    : null
                }
                <Title>{title}</Title>
            </Left>

            <Right>
                {children}
            </Right>
        </Nav>}
    </Wrapper>;
}


/* STYLED COMPONENTS */
const Wrapper = styled.div`
    position: fixed;
    background-color: #1b1b1b;
    top: 0;
    height: 60px;
    width: 100%;
    box-shadow: 0px 4px 2px 0px #1441a1;
`;

const Nav = styled.nav`
    display: flex;
    width: 100%;
    padding: 0 16px;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    
`;

const Right = styled(Left)``;


const Title = styled.h1`
    color: white;
    font-weight: 400;
`;

export default AppBar;