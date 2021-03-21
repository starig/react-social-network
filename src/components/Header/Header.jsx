import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className={`${classes.header}`}>
            <img alt={`logo`} className={classes.logo} src="https://sun9-46.userapi.com/impg/tWIpmd327A2QQkYjYlVDEfwnujDoEpqlpPb5QQ/aLqGioF-xD0.jpg?size=1200x500&quality=96&proxy=1&sign=7c004ff6d66ca96fa422ee11257ceed6&type=album" />
            <div className={`${classes.login__block}`}>
                {props.isAuth ? props.login : <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;