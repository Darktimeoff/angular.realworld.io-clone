import React, {useContext} from 'react';
import './comment.scss';
import UserInf from './../../feeds/articles/article/userInf/userInf';
import DeleteButton from './../../button/deleteButtun/deleteButton';
import { CurrentUserContext } from './../../../context/currentUser/currentUserContext';
import {withRouter} from 'react-router-dom';

const Comment = ({comment, ...props}) => {
    const [user] = useContext(CurrentUserContext);
    return (
        <div className="comment">
            <div className="comment-block">
                <p className="comment-text">{comment.body}</p>
            </div>
            <div className="comment-footer">
                <UserInf author={comment.author} createdAt={comment.createdAt}/>
                {user.currentUser.username === comment.author.username ? <DeleteButton slug={props.match.params.slug} id={comment.id} /> : null}
            </div>
        </div>
    )
}

export default withRouter(Comment);