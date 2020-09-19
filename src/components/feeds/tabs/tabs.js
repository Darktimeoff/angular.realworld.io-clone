import React from 'react';
import {Link} from 'react-router-dom';
import './tabs.scss'
const Tabs = props => {
    const createLink = ({text='', href='/', defaultActive}, i) => {
        return  <li className="tabs-item"key={i}><Link to={href} className={defaultActive ? 'tabs-link active': 'tabs-link'}>{text}</Link></li>
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