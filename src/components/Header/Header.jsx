import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={`${classes.header}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png" />
        </header>
    );
}

export default Header;