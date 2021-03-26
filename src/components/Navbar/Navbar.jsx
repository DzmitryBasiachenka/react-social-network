import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

/* let classes = {
    'nav': 'nav_class',
    'item': 'item_class'
} */

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
