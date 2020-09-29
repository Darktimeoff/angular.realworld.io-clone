import React,{useState, useEffect} from 'react';
import './feeds.scss';
import Tags from './tags/tags';
import Articles from './articles/articles';
import Tabs from './tabs/tabs';
import { useFetch } from './../../library/hooks/useFetch';
import Loader from './../loader/loader';
import BackendErrors from './../backendErrors/backendErrors';

const Feeds = props => {
    const [articleUrl, setArticleUrl] = useState(props.defaultFetchUrl);
    const [{response:tags, error:errorTags}, doFetchTags] = useFetch('/tags');
    const [{response:articles, error:errorArticles, isLoading:isLoadingArticles, setResponse}, doFetchArtciles] = useFetch(articleUrl);

    const tabsLink = props.tabsLinkCreator.map(link => {
        return {
            text: link.textLink,
            href: link.href,
            exact:link.exact,
            onClick: () => {
                setArticleUrl(link.fetchUrl);
                setResponse(null);
                doFetchArtciles();
            }
        }
    })


    useEffect(() => {
        if(props.isTagsShow) doFetchTags();
        doFetchArtciles();
    },[]);

    return (
        <section className="feeds">
            <div className="container">
            <div className="feeds-wrapper">
                    <div className="feeds-item">
                       <Tabs links={tabsLink} />
                       <div className="feed">
                            <div className="feed-wrapper">
                                {articles ? <Articles articleList={articles.articles} /> : null}
                                {articles && !articles.articles.length ? <p style={{textAlign: 'center'}}>No articles are here... yet.</p> : null}
                                {isLoadingArticles ? <Loader /> : null}
                                {errorArticles ? <BackendErrors errors={errorArticles.errors} /> : null}
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

export default Feeds;