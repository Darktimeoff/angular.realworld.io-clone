import React,{useState, useEffect} from 'react';
import './feeds.scss';
import Tags from './tags/tags';
import Articles from './articles/articles';
import Tabs from './tabs/tabs';
import { useFetch } from './../../library/hooks/useFetch';
import Loader from './../loader/loader';
import BackendErrors from './../backendErrors/backendErrors';
import Pagination from './../pagination/pagination';
import {withRouter} from 'react-router-dom';
import { getPaginator, limit, searchAndDeleteQuery } from './../../utils';
import { stringify } from 'query-string';

const Feeds = props => {
    const {currentPage, offset} = getPaginator(props.location.search);
    const stringifiedParams = stringify({
        limit, offset,
    });
    const [articleUrl, setArticleUrl] = useState(props.defaultFetchUrl+`limit=${limit}&offset=0`);
    const [{response:tags, error:errorTags}, doFetchTags] = useFetch('/tags');
    const [{response:articles, error:errorArticles, isLoading:isLoadingArticles, setResponse}, doFetchArtciles] = useFetch(articleUrl);
    const [articleList, setArticleList] = useState([]);

    const tabsLink = props.tabsLinkCreator.map(link => {
        return {
            text: link.textLink,
            href: link.href,
            exact:link.exact,
            onClick: () => {
                setArticleUrl(link.fetchUrl+`limit=${limit}&offset=0`);
                setResponse(null);
                doFetchArtciles();
                props.push(props.match.url);
            }
        }
    })


    useEffect(() => {
        if(props.isTagsShow) doFetchTags();
        doFetchArtciles();
    },[]);

    useEffect(() => {
        if(!articles) return;
        setArticleList(prevState => prevState.concat(articles.articles))
    }, [articles])

    useEffect(() => {
        if(!articles) return;
        setArticleUrl(prevState => (searchAndDeleteQuery(prevState) + stringifiedParams))
    },[currentPage, doFetchArtciles])

    useEffect(() => {
        if(!articles) return;
        doFetchArtciles()
    }, [articleUrl]);

    return (
        <section className="feeds">
            <div className="container">
            <div className="feeds-wrapper">
                    <div className="feeds-item">
                       <Tabs links={tabsLink} />
                       <div className="feed">
                            <div className="feed-wrapper">
                                {articles ? <Articles articleList={articleList} /> : null}
                                {articles && !articles.articles.length ? <p style={{textAlign: 'center'}}>No articles are here... yet.</p> : null}
                                {isLoadingArticles ? <Loader /> : null}
                                {errorArticles ? <BackendErrors errors={errorArticles.errors} /> : null}
                                {articles ? <Pagination url={props.match.url}/> : null}
                            </div>
                        </div>
                    </div>
                    { props.isTagsShow 
                        ?  <div className="feeds-item">
                            {tags ? <Tags onClickHandler={props.onTagsClickHandler} tagsList={tags.tags}/> : null}
                            {errorTags ? <BackendErrors errors={errorTags.errors} /> : null}
                        </div>
                        : null
                    }
                </div>
            </div>
        </section>
    )
}

export default withRouter(Feeds);