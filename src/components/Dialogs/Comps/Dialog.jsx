import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";



const Dialog = (props) => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink className={classes.dialog} to={path}>
                <div className={classes.compAvatar}>
                    <img className={classes.avatarImg} src='https://sun4-12.userapi.com/impg/W65TSH3EwLLkIKmUdWtwQnML-CPMWtHNT6t4uA/fQ57-k4ngiU.jpg?size=200x0&quality=96&crop=138,0,689,689&sign=cfdc6e9bf10b9a92b7ca10a4592670a7&ava=1'/>
                </div>
                <div className={classes.compName}>{props.compName}</div>
                <div className={classes.messageDate}>{`${hours}:${minutes}`}</div>
                <div className={classes.lastMessage}>How are you?</div>
            </NavLink>
        </div>
    );
}

export default Dialog;