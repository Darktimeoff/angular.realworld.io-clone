import React from 'react';
import './backendErrors.scss';

const BackendErrors = props => {
    console.log(props)
    return (
        <ul className="errors-messages">
            {Object.keys(props.errors).map((key, i) => {
                return <li key={i}>{key +' ' +  props.errors[key]}</li>
            })}
        </ul>
    )
}

export default BackendErrors;