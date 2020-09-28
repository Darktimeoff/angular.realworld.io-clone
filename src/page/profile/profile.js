import React, {useEffect, useState, useContext} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { useFetch } from './../../library/hooksLibrary';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';

const Profile = props => {
    const [user] = useContext(CurrentUserContext);
    const [{response:profile}, doFetchProfile] = useFetch(`/profiles/${props.match.params.username}`); 
    const [,doFetchFollow] = useFetch(`/profiles/${props.match.params.username}/follow`); 
    const [isFollowing, setIsFollowing] = useState(profile ? profile.profile.following : false);
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

    useEffect(() => {
        if(!profile) return;
        if(isFollowing) doFetchFollow({method: 'post', data:{}});
        else doFetchFollow({method: 'delete'});
    }, [isFollowing, doFetchFollow]);

    const buttonClickHandler = () => {
        if(user.isLoggedIn) setIsFollowing(prevState => !prevState)
        else props.history.push('/login');
        
    }

    return (
        <>
            { profile ? <Information onButtonClickHandler={buttonClickHandler} img={profile.profile.image} title={profile.profile.username} subtitle={profile.profile.bio} icon="fas fa-plus" profile={true} buttonText={isFollowing ? `Unfollow ${profile.profile.username} ` : `Follow ${profile.profile.username}`}/> : null}
            { articles ? <Feeds tabsLink={tabsLink} articleList={articles.articles} /> : null}
        </>
    )
}

export default Profile;