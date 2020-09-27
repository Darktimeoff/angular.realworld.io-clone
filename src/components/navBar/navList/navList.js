import React from 'react';
import {NavLink} from 'react-router-dom';

import './navList.scss';

const NavList = props => {
    const linkText = ({text, href}, i) => {
        return  <li className="nav-item" key={i}><NavLink to={href}  exact={true} className="nav-link">{text}</NavLink></li>
    }
    const linkIcon = ({text, href, icon}, i) => {
        return  <li className="nav-item" key={i}><span><i className={icon}></i></span><NavLink to={href} className="nav-link">{text}</NavLink></li>
    }
    return (
        <ul className="nav-list">
            {props.links.map((link, i) => {
               if(link.icon) return linkIcon(link, i)
               else return linkText(link, i)
            })}
        </ul>
    )
}

export default NavList;