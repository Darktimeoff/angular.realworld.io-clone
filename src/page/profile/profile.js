import React, {useEffect} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { useFetch } from './../../library/hooksLibrary';
import FollowButton from '../../components/button/followButton/followButton';


const Profile = props => {
    const [{response:profile}, doFetchProfile] = useFetch(`/profiles/${props.match.params.username}`); 
    const myPostsUrl = `/articles?author=${props.match.params.username}&limit=10&offset=0`;
    const favoritePostUrl =  `/articles?favorited=${props.match.params.username}&limit=10&offset=0`;
   
    const tabsLinkCreator = [
        {
            fetchUrl: myPostsUrl,
            textLink: 'My Posts',
            href: `/profile/${props.match.params.username}`,
            exact: true
        },
        {
            fetchUrl: favoritePostUrl,
            textLink: 'Favorited Posts',
            href:`/profile/${props.match.params.username}/favorites`,
            exact: false
        }
    ];

    useEffect(() => {
        doFetchProfile();
    }, []);


    return (
        <>
            { profile ? <Information img={profile.profile.image} title={profile.profile.username} subtitle={profile.profile.bio}  profile={true}><FollowButton username={props.match.params.username} following={profile.profile.following} /></Information> : null}
            <Feeds tabsLinkCreator={tabsLinkCreator} defaultFetchUrl={myPostsUrl} />
        </>
    )
}

export default Profile;