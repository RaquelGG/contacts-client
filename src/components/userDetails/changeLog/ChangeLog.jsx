import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { getChangeLog } from '../../../api-client/conection';
import Loading from '../../Loading';
import PopError from '../../PopError';
import ChangeLogEntry from './ChangeLogEntry';


function ChangeLog() {
    const userId = useParams().userId;
    const [changeLog, setChangeLog] = useState(null);
    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        async function fetchUserList() {
            setProcessing(true);
            setChangeLog(await getChangeLog(userId));
            setProcessing(false);
        }
        fetchUserList();
    }, []);
    
    const generateChangeList = () => {
        let lastValue = changeLog[0].changedFields;
        const list = changeLog.map((change, i) => {
            const listItem = <ListItem key={change.id}>
                <Date>{change.date}</Date>
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
                        <Loading />
                    ) : (
                        <PopError errorMessage="Error obtaining the user change log" />
                    )
                )}
            <Date>

            </Date>
        </Wrapper>
    );
}

/* STYLED COMPONENTS */
const Wrapper = styled.ul`

`

const List = styled.ul``

const ListItem = styled.li``

const Date = styled.p`

`




export default ChangeLog;