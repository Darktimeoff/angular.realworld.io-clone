import React, { useState, useEffect, useContext } from 'react';
import './authentication.scss';
import Form from '../../components/form/form';
import { creators, handlers, functions, validations} from '../../library/formLibrary';
import { useFetch, useLocalStorage } from '../../library/hooksLibrary';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUser/currentUserContext';
import  BackendErrors from '../../components/backendErrors/backendErrors';


const Authentication = props => {
    const isLogin = props.match.path === '/login';
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up';
    const descriptionLink = isLogin ? '/register' : '/login';
    const descriptionText = isLogin ? 'Need a account' :  'Have an account';
    const apiUrl = isLogin ? '/users/login' : '/users';
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
    const [isSuccessfullSubmit, setIsSuccessfulSubmit] = useState(false);
    const [,setToken] = useLocalStorage('jwtToken');
    const [,setCurrentUserState] = useContext(CurrentUserContext);
   
    const  formControlsSignIn =  functions.addDateToFormControls(creators.signInControls , [
        {value:email, onChangeHandler: handlers.emailHandler(setEmail), validation: validations.validateEmail},
        {value:password, onChangeHandler: handlers.passwordHandler(setPassword), validation: validations.validatePassword},
    ]);
    
    const formControlsSignUp = functions.addDateToFormControls(creators.signUpControls , [
        {value:username, onChangeHandler: handlers.usernameHandler(setUsername), validation: validations.validateUsername},
        {value:email, onChangeHandler: handlers.emailHandler(setEmail), validation: validations.validateEmail},
        {value:password, onChangeHandler: handlers.passwordHandler(setPassword), validation: validations.validatePassword},
    ]);

    const formControls = isLogin ? formControlsSignIn : formControlsSignUp;

    const submitHandler = event => {
        const sendData = isLogin 
            ? {method: 'post', data: {user:{email, password}}} 
            : {method: 'post', data: {user:{email, username,password}}}
        event.preventDefault();
        doFetch(sendData)
    }

    useEffect(() => {
        if(!response) return;

        setToken(response.user.token);
        setIsSuccessfulSubmit(true);
        setCurrentUserState(prevState => ({
            ...prevState,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }));  
    }, [response, setToken, setCurrentUserState]);

    if(isSuccessfullSubmit) {
        return <Redirect to='/' />
    }

    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">{pageTitle}</h2>
                        <p className="auth-login-subtitle"><a href={descriptionLink} className="auth-login-register">{descriptionText}?</a></p>
                        <span className="auth-login-error">
                            {functions.controlValid(formControls) ? '' : 'Вы ввели не верные данные'}
                            {error ? <BackendErrors errors={error.errors} /> : null}
                        </span>
                        <Form onSubmitHandler={submitHandler} buttonText={pageTitle} disabled={!functions.formIsValid(formControls)} formDisabled={isLoading} controlsCreate={formControls} />
                    </div>
                </div>
        </section>
    )
}

export default Authentication;