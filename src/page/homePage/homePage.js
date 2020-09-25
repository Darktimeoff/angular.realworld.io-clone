import React, {useContext, useEffect, useState} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import { useFetch } from './../../library/hooksLibrary';

const HomePage = props => {
    const [user] = useContext(CurrentUserContext);
    const [isMyFeed, setIsMyFeed] = useState(true);
    const articleUrl = isMyFeed ? 'articles/feed' : 'articles';
    const [{response:tags}, doFetchTags] = useFetch('/tags');
    const [{response:articles}, doFetchArtciles] = useFetch(`/${articleUrl}?limit=10&offset=0`);
    

    const tabsLink = [
        {text: 'Your Feed', href: user.isLoggedIn ? '/' : '/login', exact: true, onClick:() => setIsMyFeed(true)},
        {text: 'Global Feed', href: '#', onClick:() => setIsMyFeed(false)}
    ];

    let tagsList = [];
    let articleList = [];
    
    useEffect(() => {
        doFetchTags();
    },[]);

    useEffect(() => {
        doFetchArtciles();
    },[isMyFeed, doFetchArtciles])

    if(tags) {
        tagsList = tags.tags;
    }

    if(articles) {
        articleList = articles.articles;
    }
 
    return (
        <>
            {user.isLoading || user.isLoggedIn ? null : <Information title="medium" subtitle="A place to share your React knowledge"/>}
            {articles && tags ? <Feeds tabsLink={tabsLink} tagsList={tagsList} articleList={articleList}/> :  <p style={{textAlign: 'center'}}>Loading...</p>}
        </>
    )
}

export default HomePage;