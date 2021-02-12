import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return(
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                    store.dispatch(updateNewMessageActionCreator(''));
                }

                let updateNewMessage = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                }
                return (
                    <Dialogs updateNewMessage={updateNewMessage}
                             sendMessage={sendMessage}
                             newMessage={state.dialogsPage.newMessageText}
                             dialogsData={state.dialogsPage.dialogsData}
                             messagesData={state.dialogsPage.messagesData}/>
                );
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;