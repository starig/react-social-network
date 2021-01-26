import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Comps/Dialog";
import Message from "./Comps/Message";


const Dialogs = (props) => {



    let dialogsElements = props.dialogsData.map(dialog => <Dialog compName={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messages__items}>
                    {messagesElements}
                </div>
                <footer className={classes.sendMessage}>
                    <input className={classes.sendInput} placeholder="Write a message..."/>
                    <div className={classes.sendButton}>
                        <img alt={`sendImg`} className={classes.sendImg}
                             src="https://www.flaticon.com/svg/static/icons/svg/1388/1388995.svg"/>
                    </div>
                </footer>
            </div>
        </div>

    );
}

export default Dialogs;