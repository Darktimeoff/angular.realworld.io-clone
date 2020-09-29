import React, {useContext, useEffect, useState} from 'react';
import Information from './../../components/information/information';
import Feeds from './../../components/feeds/feeds';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import { useFetch } from './../../library/hooksLibrary';
import Loader from './../../components/loader/loader';
import BackendErrors from './../../components/backendErrors/backendErrors';

const HomePage = props => {
    const feedUrl = '/articles/feed?limit=10&offset=0';
    const globalFeedUrl = '/articles?limit=10&offset=0';
    const [user] = useContext(CurrentUserContext);
    const [articleUrl, setArticleUrl] = useState(user.isLoggedIn ? feedUrl : globalFeedUrl);
    const [{response:tags, error:errorTags}, doFetchTags] = useFetch('/tags');
    const [{response:articles, error:errorArticles, isLoading:isLoadingArticles, setResponse}, doFetchArtciles] = useFetch(articleUrl);

    const tabsLink = [
        {text: 'Your Feed', href: user.isLoggedIn ? '/' : '/login', exact: true, onClick: () => {
            setArticleUrl(feedUrl);
            setResponse(null);
            doFetchArtciles();
        }},
        {text: 'Global Feed', href: '#', onClick: () =>  {
            setArticleUrl(globalFeedUrl)
            setResponse(null);
            doFetchArtciles();
        }}
    ];

    useEffect(() => {
        doFetchTags();
        doFetchArtciles();
    },[]);

 
    return (
        <>
            {user.isLoading || user.isLoggedIn ? null : <Information title="medium" subtitle="A place to share your React knowledge"/>}
            {articles  && tags ? <Feeds tabsLink={tabsLink} tagsList={tags.tags} articleList={articles.articles}/> :  null}
            {isLoadingArticles ? <Loader /> : null}
            {errorTags || errorArticles ? <BackendErrors errors={errorTags.errors || errorArticles.errors} /> : null}
        </>
    )
}

export default HomePage;