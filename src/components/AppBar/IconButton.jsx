import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function IconButton({src, to}) {
    return <Button to={to} />
}

const Button = styled(Link)`
    background-image: url({src});
    background-size: 25px;
    background-repeat: no-repeat;
    background-color: inherit;
    background-position: center;
    
    width: 50px;
    height: 50px;

    &:hover {
        cursor: pointer;
    }
`;


export default IconButton;
