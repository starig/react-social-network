import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Comps/Dialog';
import Message from './Comps/Message';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'newMessageBody'} className={classes.sendInput}
                   value={props.newMessageText}
                   autocomplete="off"
                   placeholder="Write a message..."/>
            <div className={classes.sendButton}>
                <button >
                    send
                </button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <Dialog compName={dialog.name}
                                                                   key={dialog.id}
                                                                   id={dialog.id}
                                                                   avatarSrc={dialog.avatarSrc}/>);

    let messagesElements = props.messagesData.map(message => <Message compName={message.compName}
                                                                       key={message.id}
                                                                       message={message.message}
                                                                       avatarSrc={message.avatarSrc}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) {
        return <Redirect to={`/login`} />
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialog_items}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div className={classes.messages__items}>
                {messagesElements}
            </div>
            <footer className={classes.sendMessage}>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </footer>
        </div>
    </div>
}




export default Dialogs;