import React, {useEffect, useState, useContext} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { useFetch } from './../../library/hooksLibrary';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import FollowButton from '../../components/button/followButton/followButton';

const Profile = props => {
    const [user] = useContext(CurrentUserContext);
    const [{response:profile}, doFetchProfile] = useFetch(`/profiles/${props.match.params.username}`); 
    const [isMyPosts, setIsMyPosts] = useState(true);
    const articleUrl = isMyPosts ? `/articles?author=${props.match.params.username}&limit=10&offset=0` : `/articles?favorited=${props.match.params.username}&limit=10&offset=0`;
    const [{response:articles}, doFetchArtciles] = useFetch(articleUrl);

    const tabsLink = [
        {text: 'My Posts', href: `/profile/${props.match.params.username}`,  exact: true, onClick: () => setIsMyPosts(true)},
        {text: 'Favorited Post', href: `/profile/${props.match.params.username}/favorites`, onClick: () => setIsMyPosts(false)}
    ];

    useEffect(() => {
        doFetchProfile();
    }, []);

    useEffect(() => {
        doFetchArtciles();
    }, [isMyPosts, doFetchArtciles]);


    return (
        <>
            { profile ? <Information img={profile.profile.image} title={profile.profile.username} subtitle={profile.profile.bio}  profile={true}><FollowButton username={props.match.params.username} following={profile.profile.following} /></Information> : null}
            { articles ? <Feeds tabsLink={tabsLink} articleList={articles.articles} /> : null}
        </>
    )
}

export default Profile;