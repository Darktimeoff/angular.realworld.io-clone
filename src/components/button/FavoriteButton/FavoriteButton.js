import React, {useEffect, useState, useContext} from 'react';
import { CurrentUserContext } from './../../../context/currentUser/currentUserContext';
import {withRouter} from 'react-router-dom';
import { useFetch } from './../../../library/hooksLibrary';

const FavoriteButton = props => {
    const [user] = useContext(CurrentUserContext);
    const [isFavorite, setIsFavorite] = useState(props.favorited);
    const [favoriteCount, setFavoriteCount] = useState(props.favoritesCount);
    const [,doFetchFavorite] = useFetch(`/articles/${props.slug}/favorite`);

    const buttonLikeActive = {
        backgroundColor: '#5cb85c',
        color: 'white'
    }

    useEffect(() => {
        if(isFavorite) doFetchFavorite({method: 'post', data:{}});
        else doFetchFavorite({method: 'delete'});
    }, [isFavorite, doFetchFavorite]);
        
    function buttonClickHandler() {
        if(!user.isLoggedIn) {
            props.history.push('/login');
            return;
        }
        if(isFavorite) setFavoriteCount(prevState => prevState - 1);
        else setFavoriteCount(prevState => prevState + 1);
        setIsFavorite(prevState => !prevState);
    }


    return (
        <button className={'article-button-like'} style={isFavorite ? buttonLikeActive : {}} onClick={buttonClickHandler}><span className="like"><i className="fas fa-heart"></i></span>{props.isFavoriteButton ? (isFavorite ? `UnFavorite Article(${favoriteCount})` : `Favorite Article(${favoriteCount})`) : favoriteCount}</button>
    )
}

export default withRouter(FavoriteButton);