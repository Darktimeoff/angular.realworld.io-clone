import React, {useEffect, useContext, useState} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { useFetch } from './../../library/hooksLibrary';
import FollowButton from '../../components/button/followButton/followButton';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';


const Profile = props => {
    const [user] = useContext(CurrentUserContext);
    const [isAuthProfile, setIsAuthProfile] = useState(false);
    const usernameParams = props.match.params.username;
    const [{response:profile}, doFetchProfile] = useFetch(`/profiles/${usernameParams}`); 
    const myPostsUrl = `/articles?author=${usernameParams}&limit=10&offset=0`;
    const favoritePostUrl =  `/articles?favorited=${usernameParams}&limit=10&offset=0`;

    const authInf = {
        icon:'fas fa-cog',
        buttonText: 'Edit Settings',
        onButtonClickHandler: () => props.history.push('/settings')
    }

    const tabsLinkCreator = [
        {
            fetchUrl: myPostsUrl,
            textLink: 'My Posts',
            href: `/profile/${usernameParams}`,
            exact: true
        },
        {
            fetchUrl: favoritePostUrl,
            textLink: 'Favorited Posts',
            href:`/profile/${usernameParams}/favorites`,
            exact: false
        }
    ];

    useEffect(() => {
        if(!user.currentUser) return;
        setIsAuthProfile(usernameParams === user.currentUser.username);
    }, [user.currentUser]);

    useEffect(() => {
        doFetchProfile();
    }, []);

    return (
        <>
            { profile && !isAuthProfile ? <Information img={profile.profile.image} title={profile.profile.username} subtitle={profile.profile.bio} profile={true}><FollowButton username={props.match.params.username} following={profile.profile.following} /></Information> : null}
            { profile && isAuthProfile ? <Information img={profile.profile.image} title={profile.profile.username} subtitle={profile.profile.bio} profile={true}  {...authInf}></Information> : null}
            <Feeds tabsLinkCreator={tabsLinkCreator} defaultFetchUrl={myPostsUrl} />
        </>
    )
}

export default Profile;