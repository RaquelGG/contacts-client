import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import addUserIcon from '../../img/person_add_alt_24dp.svg';

function AddUserButton() {
    return (
        <Wrapper>
            <Button to='user/new' />
        </Wrapper>
    );
}


/* STYLED COMPONENTS */
const Wrapper = styled.div`
    
`

const Button = styled(Link)`
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 70px;
  height: 70px;
  background-color: #dae6ff;
  border-radius: 50%;
  background-image: url(${addUserIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  border: 2px solid #3567d3;
  box-shadow: 0px 3px 9px #00000059;

  &:active {
    box-shadow: 0px 0px 0px;
  }

  &:hover {
    cursor: pointer;
  }
`

export default AddUserButton;