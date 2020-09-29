import React, {useContext, useEffect, useState} from 'react';
import './articleFull.scss';
import Information from './../../components/information/information';
import UserInf from './../../components/feeds/articles/article/userInf/userInf';
import TagsList from '../../components/feeds/tags/tagsList/tagsList';
import Form from './../../components/form/form';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import { useFetch } from './../../library/hooksLibrary';
import { Link } from 'react-router-dom';
import { creators, handlers, functions } from './../../library/formLibrary';
import Comments from './../../components/comments/comments';
import FavoriteButton from '../../components/button/FavoriteButton/FavoriteButton';
import FollowButton from '../../components/button/followButton/followButton';
import Loader from './../../components/loader/loader';

const ArticleFull = props => {
    const [user] = useContext(CurrentUserContext);
    const [{response:articles}, doFetchArtciles] = useFetch(`/articles/${props.match.params.slug}`);
    const [{response:comments, error, isLoading:isLoadingComments}, doFetchComment] = useFetch(`/articles/${props.match.params.slug}/comments`);
    const [commentState, setCommentState] = useState('');
    const [commentList, setCommentList] = useState([]);
    const [isComment, setIsComment] = useState(false);
    const formControlsCreate = functions.addDateToFormControls(creators.commentsControls , [
        {value:commentState, onChangeHandler: handlers.inputHandler(setCommentState), required: false},
    ]);

    useEffect(() => {
        doFetchArtciles();
        doFetchComment({method: 'get'})
    }, []);

    useEffect(() => {
        if(!comments) return;
        if(Array.isArray(comments.comments)) setCommentList(comments.comments);
        if(comments.comment) setCommentList(prevState => ([comments.comment, ...prevState]))
    }, [comments,doFetchComment])


    useEffect(() => {
        if(!articles) return;
        if(isComment) {
            doFetchComment({method: 'post', data: {body: commentState}});
            setIsComment(false);
            setCommentState('')
        }
    },[isComment,setIsComment, doFetchComment]);


    const submitHandler = (event) => {
        event.preventDefault();
        setIsComment(true);
    }


    return (
        <>
           {articles ?  <Information article="true" title={articles.article.title} buttonText={`Follow Darktime`}>
                <UserInf articleFull="true" author={articles.article.author} createdAt={articles.article.createdAt}>
                    <FollowButton username={articles.article.author.username} following={articles.article.author.following} />
                    <FavoriteButton slug={props.match.params.slug} favorited={articles.article.favorited} favoritesCount={articles.article.favoritesCount} isFavoriteButton={true}/>
                </UserInf>
            </Information> : <Loader />}
            {articles ? <div className="container">
                    <div className="articleFull-wrapper">
                        <article className="article">
                            {articles.article.body}
                            <TagsList tagsList={articles.article.tagList}/>
                        </article>
                        <hr/>
                        <UserInf author={articles.article.author} createdAt={articles.article.createdAt}  >
                            <FollowButton username={articles.article.author.username} following={articles.article.author.following} />
                            <FavoriteButton slug={props.match.params.slug} favorited={articles.article.favorited} favoritesCount={articles.article.favoritesCount} isFavoriteButton={true}/>
                        </UserInf>
                       <div className="articlFull-comments-wrapper">
                            {user.isLoggedIn ? <Form onSubmitHandler={submitHandler} controlsCreate={formControlsCreate} buttonText='Post Comment'/> : <p style={{paddingTop: 50}}><Link to='/login' style={{color: '#5cb85c'}}>Sign in </Link>or<Link to='/register' style={{color: '#5cb85c'}}> sign up</Link> to add comments on this article.</p> }
                            {commentList.length ? <Comments comments={commentList}/> : null}
                       </div>
                    </div>
            </div> : null}

        </>
    )
}

export default ArticleFull;