import React from 'react';
import NavBar from '../navBar';

const NavAuth = () => {
    const links = [
		{text: 'Home', href: '/'},
		{text: 'New Article', icon: 'far fa-edit', href: '/editor'}, 
		{text: 'Settings', icon: 'fas fa-cog', href: '/settings'}, 
		{text: 'Darktime', href:'/profile'}
    ]
    
    return (
        <NavBar links={links}/>
    )
}

export default NavAuth;