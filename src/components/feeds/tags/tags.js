import React from 'react';
import './tags.scss';
import TagsList from './tagsList/tagsList';

const Tags = props => {
    return (
        <aside className="tags">
            <h2 className="tags-title">Popular tags</h2>
            <TagsList tagsList={props.tagsList} />
        </aside>
    )
}

export default Tags;