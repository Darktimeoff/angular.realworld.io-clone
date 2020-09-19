import React from 'react';
import Form from './../../components/form/form';

const Register = props => {
    const formControlsCreate = [
        {tag: 'input', type: 'text', name: 'username', placeholder: 'Username'},
        {tag: 'input', type: 'email', name: 'email', placeholder: 'Email'},
        {tag: 'input', type: 'password', name: 'password', placeholder: 'Password'},
    ]
    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Sign up</h2>
                        <p className="auth-login-subtitle"><a href="/login" className="auth-login-register">Have an account?</a></p>
                        <span className="auth-login-error"></span>
                        <Form buttonText="Sign Up" controlsCreate={formControlsCreate}/>
                    </div>
                </div>
        </section>
    )
}

export default Register;