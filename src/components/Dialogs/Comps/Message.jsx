import React from 'react';
import classes from './Message.module.css';


const Message = (props) => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return (
        <div className={`${classes.messages}`}>
            <div className={`${classes.message}`}>
                <div className={classes.avatar}>
                    <img alt={`Avatar`} className={classes.avatarImg} src={props.avatarSrc}/>
                </div>
                <div className={classes.name}>{props.compName}</div>
                <div className={classes.messageDate}>{`${hours}:${minutes}`}</div>
                <div className={classes.messageText}>{props.message}</div>
            </div>
        </div>
    );
}

export default Message;