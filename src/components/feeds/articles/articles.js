import React from 'react';
import Article from './article/article';

const Articles = props => {
    const createArticle = (article, i) => {
        return <Article updateArticles={props.updateArticles} key={i} {...article} />
    }
    return (
        <>
            {props.articleList.map(createArticle)}
        </>
    )
}

export default Articles;