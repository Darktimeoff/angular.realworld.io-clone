import React from 'react';
import './information.scss';

const Information = props => {
   let sectionName = 'information';

    if(props.profile) sectionName += ' profile';
    if(props.article) sectionName += ' article';

    return (
        <section className={sectionName}>
        <div className="container">
            <div className="information-wrapper">
                {props.img ?  <img src={props.img || "https://png.pngtree.com/png-vector/20190828/ourlarge/pngtree-smile-icon-template-design-smiling-emoticon-vector-logo-on-yellow-background-png-image_1715036.jpg"} className="information-img" alt="avatar"/>: null}
                {props.title ? <h2 className="information-title">{props.title || 'title'}</h2> : null}
                {props.subtitle ? <p className="information-subtitle">{props.subtitle || 'subtitle'}</p> : null}
                {props.icon ? <button className="information-button" onClick={props.onButtonClickHandler || null}><span className="information-button-icon"><i className={props.icon}></i></span>{props.buttonText}</button> : null}
                {props.children}
            </div>
        </div>
    </section>
    )
}

export default Information;
