import React from 'react';
import Article from './article/article';

const Articles = props => {
    const createArticle = (article, i) => {
        return <Article key={i} {...article} />
    }
    return (
        <>
            {props.articleList.map(createArticle)}
        </>
    )
}

export default Articles;