import React, {useContext, useEffect, useState} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import Loader from './../../components/loader/loader';
import BackendErrors from './../../components/backendErrors/backendErrors';

const HomePage = props => {
    const [user] = useContext(CurrentUserContext);
    const feedUrl = '/articles/feed?limit=10&offset=0';
    const globalFeedUrl = '/articles?limit=10&offset=0';

    const tabsLinkCreator = [
        {
            fetchUrl: feedUrl,
            textLink: 'Your Feed',
            href: user.isLoggedIn ? '/' : '/login',
            exact: true
        },
        {
            fetchUrl: globalFeedUrl,
            textLink: 'Global Feed',
            href:'/',
            exact: false
        }
    ];
 
    return (
        <>
            {user.isLoading || user.isLoggedIn ? null : <Information title="medium" subtitle="A place to share your React knowledge"/>}
            <Feeds defaultFetchUrl={user.isLoggedIn ? feedUrl : globalFeedUrl} tabsLinkCreator={tabsLinkCreator} isTagsShow={true}/>
        </>
    )
}

export default HomePage;