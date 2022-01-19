import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IconButton from '../common/IconButton';

import arrowBackIcon from '../../img/arrow_back_24dp.svg';

function AppBar({ children, title, goBack }) {
    return <Wrapper>
        {<Nav>
            <Left>
                {goBack
                    ? <StyledLink to={goBack}>
                        <IconButton src={arrowBackIcon}  />
                    </StyledLink>
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
    position: sticky;
    background-color: #1b1b1b;
    top: 0;
    height: 60px;
    width: 100%;
    box-shadow: 0px 4px 2px 0px #1441a1;
    display: flex;
    justify-content: center;
`;

const Nav = styled.nav`
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 800px;
    //min-width: 500px;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    
`;

const Right = styled(Left)``;


const Title = styled.h1`
    color: white;
    font-weight: 400;
    font-size: 1.1rem;
`;

const StyledLink = styled(Link)`
    margin-bottom: -6px;
`;

export default AppBar;