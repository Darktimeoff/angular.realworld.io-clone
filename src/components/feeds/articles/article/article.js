import React from 'react';
import {Link} from 'react-router-dom';
import './article.scss';
import TagsList from './../../tags/tagsList/tagsList';
import UserInf from './userInf/userInf';
import {withRouter} from 'react-router-dom'
import FavoriteButton from './../../../button/FavoriteButton/FavoriteButton';

const Article = (props) => (
    <article className="article" data-article-id={props.id}>
        <div className="article-meta">
            <div className="article-meta-item">
                <UserInf author={props.author} createdAt={props.createdAt}/>
            </div>
            <FavoriteButton slug={props.slug} favorited={props.favorited}  favoritesCount={props.favoritesCount}/>
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


export default withRouter(Article);