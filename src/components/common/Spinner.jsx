import React from 'react';
import styled from 'styled-components';

function Loading() {
    return <Circle /> ;    
}

/* STYLED COMPONENTS */
const Circle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;

    &:after {
        content: " ";
        display: block;
        margin: auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 6px solid #84abff;
        border-color: #84abff transparent #84abff transparent;
        animation: anim 1.4s linear infinite;
    }

    @keyframes anim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loading;