import React from 'react';
import NavBar from '../navBar';

const NavAuth = (props) => {
  console.log(props)
    const links = [
		{text: 'Home', href: '/'},
		{text: 'New Article', icon: 'far fa-edit', href: '/editor'}, 
		{text: 'Settings', icon: 'fas fa-cog', href: '/settings'}, 
		{text: props.username, href:'/profile/'+props.username},
    ]
    
    return (
        <NavBar links={links}/>
    )
}

export default NavAuth;