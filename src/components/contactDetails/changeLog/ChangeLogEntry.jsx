import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../../../img/arrow_forward_24dp.svg'


function ChangeLogEntry({ change, lastValue, isFirst }) {
    if (isFirst) {
        // TODO: show all contact details on creation
        return <ChangeTitle>Contact creation</ChangeTitle>
    }
    return (
        Object.entries(change.changedFields).map(([field, val]) =>
        (
            <ChangedField key={field}>
                <ChangeTitle>{field} has been changed</ChangeTitle>
                <ChangeComparison>
                    {lastValue[field]}
                    <Arrow />
                    {val}
                </ChangeComparison>
            </ChangedField>
        ))
    );
}

const ChangedField = styled.div`
    margin: 10px 20px;
`;

const ChangeComparison = styled.div`
    display: flex;
    margin: 16px;
    font-size: 1.1rem;
`;

const Arrow = styled.div`
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-size: 1.2rem;
    width: 25px;
    height: 25px;
    margin: 3px 10px 0 10px;
`;


const ChangeTitle = styled.h3`
    font-size: 1.2rem;
    color: #3567d3;
    
    &&:first-letter {
        text-transform: uppercase;
    }
`;

export default ChangeLogEntry;
