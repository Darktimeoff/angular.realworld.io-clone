import React from 'react';
import classes from './promo.module.scss'
const Promo = (props) => {
    return (
        <div className={classes.promo} style={{background: props.background || '#5cb85c'}}>
            <div className='container'>
                <div className={classes['promo-wrapper']}>
                    {props.src ? <img src={props.src}className={classes['promo-img']} /> : <h1 className={classes['promo-title']}>medium</h1>}
                    <div className={classes['promo-text']} style={props.textStyle || {}}>{props.text || 'A place to share your Angular knowledge.'}</div>
                   {props.icon && props.buttonText ?   <button className={classes['promo-button']}><i className={`fas ${props.icon || ''}`}></i>{props.buttonText || 'button'}</button> : null}
                </div>
            </div>
        </div>
    )
}

export default Promo;