import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import OverflowMenu from './OverflowMenu'
import arrowBackIcon from '../../img/arrow_back_24dp.svg';
import overflorMenuIcon from '../../img/more_vert_24dp.svg';
import closeButton from '../../img/close_24dp.svg'


function ActionBar({ children, isNewContact, contact }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);


    return (
        <Wrapper>
            {/* <Nav>
                <Left>
                    <GoBackButton to='/' />
                    <Title>{isNewContact ? ('New contact') : ('Edit contact')}</Title>
                </Left>

                {
                    isNewContact ? (
                        { children }
                    ) : (
                        <Right>
                            {children}
                            <OverflowMenuButton onClick={() => setIsMenuVisible(true)} />
                            <span style={{ display: isMenuVisible ? 'block' : 'none' }}>
                                <OverflowMenu contact={contact} >
                                    <Close onClick={() => setIsMenuVisible(false)} />
                                </OverflowMenu>
                            </span>
                        </Right>

                    )
                }
            </Nav> */}


        </Wrapper>
    );
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

const icon = `
    background-repeat: no-repeat;
    background-color: inherit;
    background-position: center;
    
    width: 50px;
    height: 50px;

    &:hover {
        cursor: pointer;
    }
`;
const GoBackButton = styled(Link)`
    ${icon};
    background-image: url(${arrowBackIcon});
    background-size: 25px;
`;

const Title = styled.h1`
    color: white;
    font-weight: 400;
`;

const OverflowMenuButton = styled.button`
    ${icon};    
    background-image: url(${overflorMenuIcon});
    border: none;
    background-size: 30px;
`;

const Close = styled.div`
    background-image: url(${closeButton});
    background-repeat: no-repeat;
    width: 100%;
    height: 24px;
    background-position: center;
    margin: auto;
    &:hover {
        cursor: pointer;
    }
`

export default ActionBar;