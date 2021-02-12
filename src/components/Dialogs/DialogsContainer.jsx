import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
        props.store.dispatch(updateNewMessageActionCreator(''));
    }

    let updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    return (
       <Dialogs updateNewMessage={updateNewMessage}
                sendMessage={sendMessage}
                newMessage={state.dialogsPage.newMessageText}
                dialogsData={state.dialogsPage.dialogsData}
                messagesData={state.dialogsPage.messagesData}/>
    );
}

export default DialogsContainer;