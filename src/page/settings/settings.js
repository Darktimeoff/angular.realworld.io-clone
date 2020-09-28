import React, {useState, useContext, useEffect} from 'react';
import './settings.scss';
import Form from './../../components/form/form';
import { creators, handlers, functions, validations} from '../../library/formLibrary';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';
import { useFetch, useLocalStorage } from './../../library/hooksLibrary';


const Settings = props => {
    const [currentUser, setCurrentUserState] = useContext(CurrentUserContext);
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [{response, error, isLoading}, doFetch] = useFetch('/user');
    const [,setToken] = useLocalStorage('jwtToken')

    useEffect(() => {
        if(!currentUser.currentUser) return;
        setUsername(currentUser.currentUser.username);
        setEmail(currentUser.currentUser.email);
        setBio(currentUser.currentUser.bio);
        setUrl(currentUser.currentUser.image);
        doFetch({method: 'put', data: {user:{...currentUser.currentUser}}});
    }, [currentUser, doFetch])

    const formControlsCreate = functions.addDateToFormControls(creators.settingsControls , [
        {value:url, onChangeHandler: handlers.inputHandler(setUrl), required: false},
        {value:username, onChangeHandler: handlers.usernameHandler(setUsername), validation: validations.validateUsername,required: false },
        {value:bio, onChangeHandler: handlers.emailHandler(setBio),required: false },
        {value:email, onChangeHandler: handlers.emailHandler(setEmail), validation: validations.validateEmail,required: false },
        {value:newPassword, onChangeHandler: handlers.passwordHandler(setNewPassword), validation: validations.validatePassword,required: true},
    ]);

    const submitHandler = (event) => {
        event.preventDefault();
        setCurrentUserState(prevState => ({...prevState, currentUser:{
            ...prevState.currentUser,
            password:newPassword, bio, image:url, email, username
        }}));
        //props.history.push(`/profile/${currentUser.currentUser.username}`);
    }

    const logOut = () => {
        setToken('')
        setCurrentUserState({isLoggedIn:null, isLoading:false, currentUser: null});
        props.history.push('/')
    }


    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Your Settings</h2>
                        <span className="auth-login-error">{error ? error.errors.toString() : null}</span>
                        <Form onSubmitHandler={submitHandler} buttonText="Update Settings" controlsCreate={formControlsCreate}>
                            <hr />
                            <button type='button' onClick={logOut} className="logout">Or click here to logout</button>
                        </Form>
                    </div>
                </div>
        </section>
    )
}

export default Settings;