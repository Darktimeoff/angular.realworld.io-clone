import React from 'react';
import './login.scss';
import Form from './../../components/form/form';

const Login = props => {
    const formControlsCreate = [
        {tag: 'input', type: 'email', name: 'email', placeholder: 'Email'},
        {tag: 'input', type: 'password', name: 'password', placeholder: 'Password'},
    ]
    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Sign in</h2>
                        <p className="auth-login-subtitle"><a href="/register" className="auth-login-register">Need an account?</a></p>
                        <span className="auth-login-error"></span>
                        <Form buttonText="Sign in" controlsCreate={formControlsCreate}/>
                    </div>
                </div>
        </section>
    )
}

export default Login;