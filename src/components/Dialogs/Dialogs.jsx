import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Comps/Dialog";
import Message from "./Comps/Message";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <Dialog compName="Ivan Starkov" id="1"/>
                <Dialog compName="Sofia Protasova" id="2"/>
                <Dialog compName="Andrey Ten" id="3"/>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages__items}>
                    <Message text="Hello!"/>
                    <Message text="How are you?"/>
                </div>
                <footer className={classes.sendMessage}>
                    <input className={classes.sendInput} placeholder="Write a message..."/>
                    <div className={classes.sendButton}>
                        <img className={classes.sendImg}
                             src="https://www.flaticon.com/svg/static/icons/svg/1388/1388995.svg"/>
                    </div>
                </footer>
            </div>
        </div>

    );
}

export default Dialogs;