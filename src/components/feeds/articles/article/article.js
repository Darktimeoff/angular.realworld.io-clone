import React from 'react';
import {Link} from 'react-router-dom';
import './article.scss';
import TagsList from './../../tags/tagsList/tagsList';
import UserInf from './userInf/userInf';


const Article = props => (
    <article className="article" data-article-id={props.id}>
        <div className="article-meta">
            <div className="article-meta-item">
                <UserInf author={props.author} createdAt={props.createdAt}/>
            </div>
            <button className="article-button-like"><span className="like"><i className="fas fa-heart"></i></span>{props.favoritesCount}</button>
        </div>
        <Link to={`/article/${props.slug}`} className="article-preview-link">
            <h2 className="article-title">{props.title}</h2>
            <p className="article-text">{props.description}</p>
            <div className="article-preview-item">
                <span>Read more...</span>
                <TagsList tagsList={props.tagList} />
            </div>
        </Link>
    </article>
);

export default Article;