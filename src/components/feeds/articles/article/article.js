import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import './article.scss';
import TagsList from './../../tags/tagsList/tagsList';
import UserInf from './userInf/userInf';
import { useFetch } from './../../../../library/hooksLibrary';
import { CurrentUserContext } from './../../../../context/currentUser/currentUserContext';
import {withRouter} from 'react-router-dom'


const Article = (props) => {
    const [user] = useContext(CurrentUserContext);
    const [like, setLike] = useState(props.favoritesCount);
    const [, doFetch] = useFetch(`/articles/${props.slug}/favorite`);
    const [isLike, setIsLike] = useState(props.favorited);

    const buttonLikeActive = {
        backgroundColor: '#5cb85c',
        color: 'white'
    }

    function addLike() {
        if(!user.isLoggedIn) {
            props.history.push('/login');
            return;
        }

        if(isLike) {
            setLike(prevState => prevState - 1);
            setIsLike(false);
            doFetch({method: 'delete'});
            return;
        } else {
            setLike(prevState => prevState + 1);
            doFetch({method: 'post', data: {}});
            setIsLike(true);
            return;
        }  
    }


    return (
        <article className="article" data-article-id={props.id}>
            <div className="article-meta">
                <div className="article-meta-item">
                    <UserInf author={props.author} createdAt={props.createdAt}/>
                </div>
                <button className={'article-button-like'} style={isLike ? buttonLikeActive : {}} onClick={addLike}><span className="like"><i className="fas fa-heart"></i></span>{like}</button>
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
}

export default withRouter(Article);