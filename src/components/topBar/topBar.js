import React from 'react';
import classes from './topBar.module.scss';
import {NavLink} from 'react-router-dom';
console.log(classes['nav-link']);
const TopBar = () => {
    return (
        <nav className={classes.navbar}>
            <div className='container'>
                <div className={classes['nav-wrapper']}>
                    <div>
                        <NavLink to="/"className={classes['nav-brand']} >medium</NavLink>
                    </div>
                    <ul className={classes['nav-list']}>
                        <li className={classes['nav-item']}>
                            <NavLink to="/" className={classes['nav-link']}>Home</NavLink>
                        </li>
                        <li className={classes['nav-item']}>
                            <NavLink to="/login" className={classes['nav-link']}>Sign in</NavLink>
                        </li>
                        <li className={classes['nav-item']}>
                            <NavLink to="/register" className={classes['nav-link']}>Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default TopBar;