import React, {useContext, useEffect, useState} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import { useFetch } from './../../library/hooksLibrary';

const HomePage = props => {
    const [user] = useContext(CurrentUserContext);
    const [tag, setTag] = useState('');
    const [isMyFeed, setIsMyFeed] = useState(user.isLoggedIn);
    const articlesUrl = isMyFeed ? '/articles/feed?limit=10&offset=0' : '/articles?limit=10&offset=0';
    const [articleUrl, setArticleUrl] = useState(articlesUrl);
    const [{response:tags}, doFetchTags] = useFetch('/tags');
    const [{response:articles}, doFetchArtciles] = useFetch(articleUrl);
    
    
    const tabsLink = [
        {text: 'Your Feed', href: user.isLoggedIn ? '/' : '/login', exact: true, onClick:() => {setIsMyFeed(true);setArticleUrl('/articles/feed?limit=10&offset=0');setTag('');}},
        {text: 'Global Feed', href: '#', onClick:() => {setIsMyFeed(false);setArticleUrl('/articles?limit=10&offset=0');setTag('');}}
    ];
    
    useEffect(() => {
        doFetchTags();
    },[]);

    useEffect(() => {
        if(!articles) return;
        if(!tag) doFetchArtciles();
    }, [tag, doFetchArtciles])

    useEffect(() => {
        doFetchArtciles();
    },[isMyFeed, doFetchArtciles])

    function tagsClickHandler(name) {
        setArticleUrl(`/articles?tag=${name}&limit=10&offset=0`);
        setTag(name);
        doFetchArtciles();
    }
 
    if(tag) {
        tabsLink.push({text:`#${tag}`, href:'/'})
    }

 
    return (
        <>
            {user.isLoading || user.isLoggedIn ? null : <Information title="medium" subtitle="A place to share your React knowledge"/>}
            {articles && tags ? <Feeds tabsLink={tabsLink} onTagsClickHandler={tagsClickHandler} tagsList={tags.tags} articleList={articles.articles}/> :  <p style={{textAlign: 'center'}}>Loading...</p>}
        </>
    )
}

export default HomePage;