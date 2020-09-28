import React from 'react';
import './tagsList.scss';

const TagsList = props => {
    const createItem = (text, i) => {
        return <div className="tags-item" key={i} onClick={() => {
            if(typeof props.onClickHandler === 'function') props.onClickHandler(text);
            else return;
        }}>{text || 'tag'}</div>;
    }

    return (
        <div className="tags-list">
        {props.tagsList.map(createItem)}
        </div>
    )
}

export default TagsList;