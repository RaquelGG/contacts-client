import React from 'react';
import styled from 'styled-components'

function getInitials(user) {
    return (user.name[0] + user.surname[0]).toUpperCase();
}

function UserIcon({user}) {
    return(
        <Wrapper>
            <Circle>
                <Initials>{getInitials(user)}</Initials>
            </Circle>
        </Wrapper>
    )
}

/* STYLED COMPONENTS */
const Wrapper = styled.div`
`

const Circle = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #acc6ff;
    display: flex;
    
`

const Initials = styled.h2`
    margin: 4px auto auto auto;
    color: white;
    font-weight: 400;
`

export default UserIcon;