import React from 'react';
import NavBar from './../navBar';

const NavDefault = () => {
    const links = [
		{text: 'Home', href: '/'},
		{text: 'Sign in', href: '/login'}, 
		{text: 'Sign up', href:'/register'}
	]
    return (
        <NavBar links={links}/>
    )
}

export default NavDefault;