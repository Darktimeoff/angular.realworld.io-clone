import React from 'react'; 
import './userInf.scss';
import {Link} from 'react-router-dom';

const UserInf = props => (
    <div className={props.articleFull ? "user-meta-item articleFull" : "user-meta-item"}>
        <Link to={`/profile/${props.author.username}`} className="user-profile-link"><img src={props.author.image} alt="avatar" /></Link>
            <div className="user-meta-info">
                <Link to={`/profile/${props.author.username}`} className="user-login-name">{props.author.username}</Link>
                <time className="user-date">{new Date(props.createdAt).toLocaleDateString()}</time>
        </div>
        {props.children}
   </div>
)

export default UserInf;