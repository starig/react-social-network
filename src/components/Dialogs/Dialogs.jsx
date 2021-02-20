import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Comps/Dialog';
import Message from './Comps/Message';



class Dialogs extends React.Component {
    dialogsElements = this.props.dialogsData.map(dialog => <Dialog compName={dialog.name}
                                                                  key={dialog.id}
                                                                  id={dialog.id}
                                                                  avatarSrc={dialog.avatarSrc}/>);

    messagesElements = this.props.messagesData.map(message => <Message compName={message.compName}
                                                                      key={message.id}
                                                                      message={message.message}
                                                                      avatarSrc={message.avatarSrc}/>);

    newMessageElement = React.createRef();

    sendMessage = () => {
        this.props.sendMessage();
    }

    updateNewMessage = () => {
        let text = this.newMessageElement.current.value;
        this.props.updateNewMessage(text);
    }


    render() {
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialog_items}>
                    {this.dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div className={classes.messages__items}>
                        {this.messagesElements}
                    </div>
                    <footer className={classes.sendMessage}>
                        <input className={classes.sendInput}
                               ref={this.newMessageElement}
                               value={this.props.newMessageText}
                               placeholder="Write a message..." onChange={this.updateNewMessage}/>
                        <div className={classes.sendButton} onClick={this.sendMessage}>
                            <img alt={`sendImg`} className={classes.sendImg}
                                 src="https://www.flaticon.com/svg/static/icons/svg/1388/1388995.svg"/>
                        </div>
                    </footer>
                </div>
            </div>

        );
    }
}

export default Dialogs;