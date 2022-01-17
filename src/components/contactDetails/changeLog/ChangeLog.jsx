import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { getChangeLog } from '../../../api-client/conection';
import Spinner from '../../Spinner';
import PopError from '../../PopError';
import ChangeLogEntry from './ChangeLogEntry';


function ChangeLog() {
    const contactId = useParams().contactId;
    const [changeLog, setChangeLog] = useState(null);
    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        async function fetchChangeLog() {
            setProcessing(true);
            setChangeLog(await getChangeLog(contactId));
            setProcessing(false);
        }
        fetchChangeLog();
    }, [contactId]);

    const dateFormat = (date) => {
        const newDate = new Date(date);
        return new Intl.DateTimeFormat('en-GB', { 
            dateStyle: 'full', 
            timeStyle: 'short' 
        }).format(newDate);
    }
    
    const generateChangeList = () => {
        let lastValue = changeLog[0].changedFields;
        const list = changeLog.map((change, i) => {
            const listItem = <ListItem key={change.id}>
                <SmallTitle>{dateFormat(change.date)}</SmallTitle>
                <ChangeLogEntry change={change} lastValue={lastValue} isFirst={i === 0} />
            </ListItem>;
            lastValue = { ...lastValue, ...change.changedFields };
            return listItem;

        });
        list.reverse();
        return <List>
            { list }
        </List>
    };

    return (
        <Wrapper>
            {changeLog ?
                generateChangeList()
                : (
                    processing ? (
                        <Spinner />
                    ) : (
                        <PopError errorMessage="Error obtaining the contact change log" />
                    )
                )}
            <SmallTitle>

            </SmallTitle>
        </Wrapper>
    );
}

/* STYLED COMPONENTS */
const Wrapper = styled.ul`

`

const List = styled.ul``

const ListItem = styled.li``

const SmallTitle = styled.p`

`




export default ChangeLog;