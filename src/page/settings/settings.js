import React from 'react';
import './settings.scss';
import Form from './../../components/form/form';

const Settings = props => {
    const formControlsCreate = [
        {tag: 'input', name: 'picture', placeholder: 'URL of profile picture', required: 'false'},
        {tag: 'input', name: 'username', placeholder: 'Username'},
        {tag: 'textarea', name: 'bio', placeholder: 'Short bio about you', rows: '8', required: 'false' },
        {tag: 'input', name: 'email', placeholder: 'Email'},
        {tag: 'input', name: 'newpassword', placeholder: 'New Password', required: 'false'},
    ];

    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Your Article</h2>
                        <p className="auth-login-subtitle"><a href="/register" className="auth-login-register">Need an account?</a></p>
                        <span className="auth-login-error"></span>
                        <Form buttonText="Publish Article" controlsCreate={formControlsCreate}>
                            <hr />
                            <button className="logout">Or click here to logout</button>
                        </Form>
                    </div>
                </div>
        </section>
    )
}

export default Settings;