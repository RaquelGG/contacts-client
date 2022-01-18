import React  from 'react';
import styled from 'styled-components';


function IconButton({src, ...attrs}) {
    return <Button image={src} type="button" {...attrs} />
}

const Button = styled.button`
    background-image: url(
        ${({image}) => image}
    );
    background-size: 28px;
    background-repeat: no-repeat;
    background-color: inherit;
    background-position: center;
    border: none;
    
    width: 70px;
    height: 70px;

    &:hover {
        cursor: pointer;
    }
`;

export default IconButton;
