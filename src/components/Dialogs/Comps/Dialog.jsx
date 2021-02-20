import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";



const Dialog = (props) => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink className={classes.dialog} to={path}>
                <div className={classes.compAvatar}>
                    <img alt={`Avatar`} className={classes.avatarImg} src={props.avatarSrc}/>
                </div>
                <div className={classes.compName}>{props.compName}</div>
                <div className={classes.messageDate}>{`${hours}:${minutes}`}</div>
                <div className={classes.lastMessage}>How are you?</div>
            </NavLink>
        </div>
    );
}

export default Dialog;