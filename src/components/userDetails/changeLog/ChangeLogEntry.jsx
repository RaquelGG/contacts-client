import React from 'react';
import styled from 'styled-components';


function ChangeLogEntry({ change, lastValue, isFirst }) {
    if (isFirst) {
        // TODO: show all contact details on creation
        return <ChangeTitle>Contact creation</ChangeTitle>
    }
    return (
        Object.entries(change.changedFields).map(([field, val]) =>
        (
            <span key={field}>
                <ChangeTitle>{field} has been changed</ChangeTitle>
                <ChangeComparation>
                    <P>{lastValue[field]}</P>
                    <Arrow />
                    <P>{val}</P>
                </ChangeComparation>
            </span>
        ))
    );
}

const ChangeComparation = styled.div``

const Arrow = styled.div``

const P = styled.p``

const ChangeTitle = styled.h3``

export default ChangeLogEntry;
