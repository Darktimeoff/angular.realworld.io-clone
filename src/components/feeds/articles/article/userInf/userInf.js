import React from 'react'; 
import './userInf.scss';
import {Link} from 'react-router-dom';

const UserInf = props => (
    <div className={props.articleFull ? "user-meta-item articleFull" : "user-meta-item"}>
        <Link to="/profile" className="user-profile-link"><img src={props.meta.src} alt="avatar" /></Link>
            <div className="user-meta-info">
                <Link to={props.hrefProfile} className="user-login-name">{props.meta.username}</Link>
                <time className="user-date">{props.meta.date}</time>
        </div>
        {props.children}
   </div>
)

export default UserInf;