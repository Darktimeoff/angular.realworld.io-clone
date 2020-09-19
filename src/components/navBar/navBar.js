import React from 'react';
import './navBar.scss';
import NavList from './navList/navList';
import {Link} from 'react-router-dom';

const NavBar = props => {
    return (
        <header>
            <nav className="nav">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className="nav-brand">{props.brand || 'medium'}</Link>
                        <NavList links={props.links}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;