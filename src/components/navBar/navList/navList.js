import React from 'react';
import {Link} from 'react-router-dom';

import './navList.scss';

const NavList = props => {
    const linkText = ({text, href}, i) => {
        return  <li className="nav-item" key={i}><Link to={href} className="nav-link">{text}</Link></li>
    }
    const linkIcon = ({text, href, icon}, i) => {
        return  <li className="nav-item" key={i}><span><i className={icon}></i></span><Link to={href} className="nav-link">{text}</Link></li>
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