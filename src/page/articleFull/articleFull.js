import React from 'react';
import './articleFull.scss';
import Information from './../../components/information/information';
import UserInf from './../../components/feeds/articles/article/userInf/userInf';
import TagsList from '../../components/feeds/tags/tagsList/tagsList';
import Form from './../../components/form/form';

const ArticleFull = props => {
    const userInf = {
        hrefProfile: '/profile',
        meta: {
            date: new Date().toLocaleDateString(),
            username: 'Darktime',
            src: 'https://png.pngtree.com/png-vector/20190828/ourlarge/pngtree-smile-icon-template-design-smiling-emoticon-vector-logo-on-yellow-background-png-image_1715036.jpg'
        }
    }
    const tagsList = ['Dark', 'zzz', 'fizz'];
    const formControlsCreate = [
        {tag: 'textarea', name: 'comment', placeholder: 'Write a commet', rows: '8'},
    ];
    return (
        <>
            <Information article="true" title="Darktime" buttonText={`Follow Darktime`} icon="fas fa-plus">
                <UserInf hrefProfile={userInf.hrefProfile} meta={userInf.meta} articleFull="true" >
                    <button className="information-button"><span className="information-button-icon"><i className='fas fa-plus'></i></span>{`Follow Hren`}</button>
                    <button className="article-button-like"><span className="like"><i className="fas fa-heart"></i></span>Favorite Article(0)</button>
                </UserInf>
            </Information>
            <div className="container">
                    <div className="articleFull-wrapper">
                        <article className="article">
                            Lorem ipsum dolor sit amet, con Lorem
                            Lorem ipsum dolor sit amet, con Lorem
                            Lorem ipsum dolor sit amet, con Lorem
                            Lorem ipsum dolor sit amet, con Lorem
                            <TagsList tagsList={tagsList}/>
                        </article>
                        <hr/>
                        <UserInf hrefProfile={userInf.hrefProfile} meta={userInf.meta} >
                            <button className="information-button"><span className="information-button-icon"><i className='fas fa-plus'></i></span>{`Follow Hren`}</button>
                            <button className="article-button-like"><span className="like"><i className="fas fa-heart"></i></span>Favorite Article(0)</button>
                        </UserInf>
                        <Form controlsCreate={formControlsCreate} buttonText='Post Comment'/>
                    </div>
            </div>

        </>
    )
}

export default ArticleFull;