import React from 'react';
import Form from './../../components/form/form';

const NewArticle = props => {
    const formControlsCreate = [
        {tag: 'input', name: 'title', placeholder: 'Article Title'},
        {tag: 'input', name: 'about', placeholder: 'What`s this article about'},
        {tag: 'textarea', name: 'article', placeholder: 'Write your article(in markdown)', rows: '8'},
        {tag: 'input', name: 'tags', placeholder: 'Enter tags'},
    ];

    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Your Article</h2>
                        <p className="auth-login-subtitle"><a href="/register" className="auth-login-register">Need an account?</a></p>
                        <span className="auth-login-error"></span>
                        <Form buttonText="Publish Article" controlsCreate={formControlsCreate}/>
                    </div>
                </div>
        </section>
    )
}

export default NewArticle;