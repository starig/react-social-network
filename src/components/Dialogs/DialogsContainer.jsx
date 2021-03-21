import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import * as React from "react";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
            dispatch(updateNewMessageActionCreator(''));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
