import React from 'react';
import {NavLink} from 'react-router-dom';
import './tabs.scss'
const Tabs = props => {
    const createLink = ({text='', href='/', exact=false, onClick}, i) => {
        return  <li className="tabs-item" key={i} onClick={onClick}><NavLink to={href} exact={exact}  className={'tabs-link'}>{text}</NavLink></li>
    }
    return (
        <div className="tabs">
            <ul className="tabs-list">
                {
                    props.links.map(createLink)
                }
            </ul>
        </div>
    )
}

export default Tabs;