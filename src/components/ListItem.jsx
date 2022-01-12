import React from 'react';
import styled from 'styled-components/macro'

function ListItem({name}) {
    return(
        <Wrapper>
            <Name>{name}</Name>
        </Wrapper>
    )
}

/* STYLED COMPONENTS */
const Wrapper = styled.div`
    
`

const Name = styled.p`
    
`

export default ListItem;