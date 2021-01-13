import React from 'react';
import classes from './Header.module.css';



const Header = () => {
    return (
        <header className={`${classes.header}`}>
            <img className={classes.logo} src="https://sun9-46.userapi.com/impg/tWIpmd327A2QQkYjYlVDEfwnujDoEpqlpPb5QQ/aLqGioF-xD0.jpg?size=1200x500&quality=96&proxy=1&sign=7c004ff6d66ca96fa422ee11257ceed6&type=album" />
        </header>
    );
}

export default Header;