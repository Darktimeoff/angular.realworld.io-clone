import React from 'react';
import Comment from './comment/comment';

const Comments = props => {
    function createComment(comment, index) {
        return <Comment comment={comment} index={index} key={index}/>
    }

    return (
        <>
            {props.comments.map(createComment)}
        </>
    )
}

export default Comments;