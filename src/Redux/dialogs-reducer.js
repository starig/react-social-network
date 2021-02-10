const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                compName: "You",
                message: state.newMessageText,
                avatarSrc: "https://sun9-37.userapi.com/impg/To82glkn4N-kvUn-1I4Rbmq8NaZnXqHFOX1Wlg/glE5PZ9ishI.jpg?size=900x900&quality=96&proxy=1&sign=4e1eb3cf42a0377feec07cfcf3a79a05&type=album",
            }
            state.messagesData.push(newMessage);
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            break;
    }

    return state;
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
});

export const updateNewMessageActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: newText,
});

export default dialogsReducer;