import React from 'react';
import './form.scss';

const Form = props => {
    const inputCreate = ({type='text', name='', placeholder='', required='true'}, i) => {
        return <fieldset className="form-group" key={i}><input type={type} className="form-control" name={name} placeholder={placeholder} required={required}/></fieldset>
    }
    const textAreaCreate = ({name='', placeholder='', rows=8, required='true'}, i) => {
       return <fieldset className="form-group" key={i}><textarea className="form-control" name={name} placeholder={placeholder} rows={rows} required={required}/></fieldset>
    }
    return (
        <form className="form">
            <fieldset>
                {   //eslint-disable-next-line
                    props.controlsCreate.map((control, i) => {
                        if(control.tag === 'input') return inputCreate(control, i);
                        if(control.tag === 'textarea') return textAreaCreate(control, i);
                    })
                }
                <button className="form-button">{props.buttonText || 'button'}</button>
                {props.children}
            </fieldset>
        </form>
    )
}

export default Form;