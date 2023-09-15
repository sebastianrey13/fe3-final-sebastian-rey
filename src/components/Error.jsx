import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from '../components/utils/global.context';

function Error(props) {

    const { theme } = useContext(ContextGlobal);

    return (
        <div className={`error error-${theme}`}>{props.info}</div>
    )
}

export default Error