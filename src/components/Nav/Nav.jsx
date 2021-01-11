import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="/profile" className={classes.item__link}>Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/dialogs" className={classes.item__link}>Messages</a>
            </div>
            <div className={classes.item}>
                <a href="/news" className={classes.item__link}>News</a>
            </div>
            <div className={classes.item}>
                <a href="/music" className={classes.item__link}>Music</a>
            </div>
            <div className={classes.item}>
                <a href="/settings" className={classes.item__link}>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;