import React, { useState } from 'react';
import './login.scss';
import Form from './../../components/form/form';
import { creators, handlers, functions, validations} from './../../library/formLibrary';
import { useFetch } from './../../library/hooksLibrary';


const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{response, isLoading, error}, doFetch] = useFetch(`/users/login`);

    console.log(response, isLoading, error);

    const formControls = functions.addDateToFormControls(creators.signInControls, [
        {value:email, onChangeHandler: handlers.emailHandler(setEmail), validation: validations.validateEmail},
        {value:password, onChangeHandler: handlers.passwordHandler(setPassword), validation: validations.validatePassword},
    ]);

    const submitHandler = event => {
        event.preventDefault();
        doFetch({
            method: 'post',
            data: {
                user: {
                    email, password
                }
            }
        })
    }

    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Sign in</h2>
                        <p className="auth-login-subtitle"><a href="/register" className="auth-login-register">Need an account?</a></p>
                        <span className="auth-login-error">{functions.controlValid(formControls) ? '' : 'Вы ввели не верные данные'}</span>
                        <Form onSubmitHandler={submitHandler} buttonText="Sign in" disabled={!functions.formIsValid(formControls)} formDisabled={isLoading} controlsCreate={formControls} />
                    </div>
                </div>
        </section>
    )
}

export default Login;