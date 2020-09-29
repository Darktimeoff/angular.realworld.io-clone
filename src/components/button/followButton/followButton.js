import React, {useEffect, useState, useContext} from 'react';
import {withRouter} from 'react-router-dom';
import { CurrentUserContext } from './../../../context/currentUser/currentUserContext';
import { useFetch } from './../../../library/hooksLibrary';

const FollowButton = props => {
    const [user] = useContext(CurrentUserContext);
    const [isFollowing, setIsFollowing] = useState(props.following);
    const [,doFetchFollow] = useFetch(`/profiles/${props.username}/follow`); 

    useEffect(() => {
        if(isFollowing) doFetchFollow({method: 'post', data:{}});
        else doFetchFollow({method: 'delete'});
    }, [isFollowing, doFetchFollow]);

    const buttonClickHandler = () => {
        if(!user.isLoggedIn) {
            props.history.push('/login');
            return;
        }
        setIsFollowing(prevState => !prevState);
    }

    return (
        <button onClick={buttonClickHandler} className="information-button"><span className="information-button-icon"><i className='fas fa-plus'></i></span>{isFollowing ? `Unfollow ${props.username} ` : `Follow ${props.username}`}</button>
    )
}

export default withRouter(FollowButton);