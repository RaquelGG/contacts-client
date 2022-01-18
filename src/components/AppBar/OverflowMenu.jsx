import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from './IconButton'
import overFlowMenuIcon from '../../img/more_vert_24dp.svg'



function OverflowMenu({ contact }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        isMenuVisible ? <IconButton src={overFlowMenuIcon} onClick={() => setIsMenuVisible(true)} />
            : <Background isMenuVisible={isMenuVisible}>
                <List>
                    <Option onClick={() => { }}>Remove contact</Option>
                    <StyledLink to={`/contact/changelog/${contact.id}`}>
                        <Option>Open change log</Option>
                    </StyledLink>
                </List>
            </Background>
    );
}

/* STYLED COMPONENTS */
const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #00000024;
    display: ${({ isMenuVisible }) =>
        isMenuVisible ? 'block' : 'none'
    };
`

const List = styled.ul`
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