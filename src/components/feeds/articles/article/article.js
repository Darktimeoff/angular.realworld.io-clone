import React from 'react';
import {Link} from 'react-router-dom';
import './article.scss';
import TagsList from './../../tags/tagsList/tagsList';
import UserInf from './userInf/userInf';


const Article = props => (
    <article className="article" data-article-id={props.id}>
        <div className="article-meta">
            <div className="article-meta-item">
                <UserInf hrefProfile={props.hrefProfile} meta={props.meta} />
            </div>
            <button className="article-button-like"><span className="like"><i className="fas fa-heart"></i></span>{props.meta.like}</button>
        </div>
        <Link to={props.hrefArticle} className="article-preview-link">
            <h2 className="article-title">{props.title}</h2>
            <p className="article-text">{props.about}</p>
            <div className="article-preview-item">
                <span>Read more...</span>
                <TagsList tagsList={props.tagsList} />
            </div>
        </Link>
    </article>
);

export default Article;