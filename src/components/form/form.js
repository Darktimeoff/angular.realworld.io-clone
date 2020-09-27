import React from 'react';
import './form.scss';

const Form = props => {
    const inputCreate = ({type='text', name='', placeholder='', required=true, onChangeHandler=null, value='', validation, valid, touched, isValid}, i) => {
        return <fieldset 
                className="form-group" 
                key={i}>
                <input type={type} 
                className="form-control" 
                name={name} 
                placeholder={placeholder} 
                required={required} 
                onChange={(event) => {
                    touched.current = true;
                    valid.current = typeof validation === "function"? validation(event.target.value) : true;
                    isValid.current = touched.current && valid.current
                    onChangeHandler(event);
                }} 
                value={value}
                />
        </fieldset>
    }

    const textAreaCreate = ({name='', placeholder='', rows=8, required=true, onChangeHandler=null, value=''}, i) => {
       return <fieldset 
                className="form-group" 
                key={i}>
                <textarea 
                className="form-control" 
                name={name} 
                placeholder={placeholder} 
                rows={rows} 
                required={required} 
                onChange={onChangeHandler} 
                value={value} 
                />
            </fieldset>
    }

    return (
        <form className="form" onSubmit={props.onSubmitHandler ? props.onSubmitHandler: (e) => e.preventDefault}>
            <fieldset disabled={props.formDisabled}>
                {   //eslint-disable-next-line
                    props.controlsCreate.map((control, i) => {
                        if(control.tag === 'input') return inputCreate(control, i);
                        if(control.tag === 'textarea') return textAreaCreate(control, i);
                    })
                }
                <button className="form-button" disabled={props.disabled}>{props.buttonText || 'button'}</button>
                {props.children}
            </fieldset>
        </form>
    )
}

export default Form;