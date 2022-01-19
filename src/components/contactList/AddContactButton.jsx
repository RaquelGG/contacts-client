import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import addContactIcon from '../../img/person_add_alt_24dp.svg';

function AddContactButton() {
    return <Button to='contact/new' />;
}


/* STYLED COMPONENTS */
const Button = styled(Link)`
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 70px;
  height: 70px;
  background-color: #dae6ff;
  border-radius: 50%;
  background-image: url(${addContactIcon});
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
`;

export default AddContactButton;