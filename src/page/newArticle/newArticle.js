import React,{useState, useEffect} from 'react';
import Form from './../../components/form/form';
import { creators, handlers, functions, validations} from '../../library/formLibrary';
import { useFetch } from './../../library/hooksLibrary';

const NewArticle = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');
    const [{response, error, isLoading}, doFetch] = useFetch('/articles');

    const formControlsCreate = functions.addDateToFormControls(creators.newArticleControls , [
        {value:title, onChangeHandler: handlers.inputHandler(setTitle), required: true},
        {value:description, onChangeHandler: handlers.inputHandler(setDescription), required: true},
        {value:body, onChangeHandler: handlers.inputHandler(setBody),required: true },
        {value:tags, onChangeHandler: handlers.inputHandler(setTags), required: false },
    ]);

   /*  useEffect(() => {
        if(!response) return;
        //props.history.push(`/article/${response.article.slug}`);
    }, [response]) */

    function submitHandler(event) {
        event.preventDefault();
        doFetch({ method: 'post', data: {article: {tagList: tags.split(',') || [], title, description, body}}})
    }

    return (
        <section className="auth-login">
                <div className="container">
                    <div className="auth-login-wrapper">
                        <h2 className="auth-login-title">Your Article</h2>
                        <span className="auth-login-error">{error ? error.errors.toString() : null}</span>
                        <Form onSubmitHandler={submitHandler} buttonText="Publish Article" controlsCreate={formControlsCreate}/>
                    </div>
                </div>
        </section>
    )
}

export default NewArticle;