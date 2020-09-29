import React, {useContext} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';


const HomePage = props => {
    const [user] = useContext(CurrentUserContext);
    const feedUrl = '/articles/feed?';
    const globalFeedUrl = '/articles?';

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