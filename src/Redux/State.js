const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello, my name is Shrek!', likesCount: 5, commentCount: 3},
                {id: 1, message: 'It is my first post!', likesCount: 24, commentCount: 12},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: "Ivan Starkov",
                    avatarSrc: "https://sun9-44.userapi.com/impg/u4-77d53Dqs4n7YRPscKJDBEhYbdbDKw92HnvA/t0u5YfebLU0.jpg?size=492x599&quality=96&proxy=1&sign=91959ae67a0251734844d91f63656f94&type=album"
                },
                {
                    id: 2,
                    name: "Sofia Protasova",
                    avatarSrc: "https://sun9-37.userapi.com/impg/To82glkn4N-kvUn-1I4Rbmq8NaZnXqHFOX1Wlg/glE5PZ9ishI.jpg?size=900x900&quality=96&proxy=1&sign=4e1eb3cf42a0377feec07cfcf3a79a05&type=album"
                },
                {
                    id: 3,
                    name: "Andrey Ten",
                    avatarSrc: "https://sun9-58.userapi.com/impg/dyU8px7NgSx9JwKXf7b6lHFvBW8NA45KhakD4Q/vqJTY4I08A0.jpg?size=637x839&quality=96&proxy=1&sign=98a3b5b5ab2af2435555637c13d411b2&type=album"
                },
            ],
            messagesData: [
                {
                    id: 1,
                    compName: "Sofia Protasova ",
                    message: "Hello!",
                    avatarSrc: "https://sun9-37.userapi.com/impg/To82glkn4N-kvUn-1I4Rbmq8NaZnXqHFOX1Wlg/glE5PZ9ishI.jpg?size=900x900&quality=96&proxy=1&sign=4e1eb3cf42a0377feec07cfcf3a79a05&type=album"
                },
                {
                    id: 2,
                    compName: "Andrey Ten",
                    message: "How are you?",
                    avatarSrc: "https://sun9-58.userapi.com/impg/dyU8px7NgSx9JwKXf7b6lHFvBW8NA45KhakD4Q/vqJTY4I08A0.jpg?size=637x839&quality=96&proxy=1&sign=98a3b5b5ab2af2435555637c13d411b2&type=album"
                },
                {
                    id: 3,
                    compName: "Ivan Starkov",
                    message: "All is good, thanks",
                    avatarSrc: "https://sun9-44.userapi.com/impg/u4-77d53Dqs4n7YRPscKJDBEhYbdbDKw92HnvA/t0u5YfebLU0.jpg?size=492x599&quality=96&proxy=1&sign=91959ae67a0251734844d91f63656f94&type=album"
                },
            ],
            newMessageText: '',
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
            commentCount: 0,
        }
        this._state.profilePage.postsData.unshift(newPost);
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _sendMessage() {
        let newMessage = {
            id: 3,
            compName: "You",
            message: this._state.dialogsPage.newMessageText,
            avatarSrc: "https://sun9-37.userapi.com/impg/To82glkn4N-kvUn-1I4Rbmq8NaZnXqHFOX1Wlg/glE5PZ9ishI.jpg?size=900x900&quality=96&proxy=1&sign=4e1eb3cf42a0377feec07cfcf3a79a05&type=album",
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._callSubscriber(this._state);
    },
    _updateNewMessage(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        switch(action.type) {
            case ADD_POST:
                this._addPost();
                console.log('add post');
                break;
            case SEND_MESSAGE:
                this._sendMessage();
                console.log('send message');
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newText);
                break;
            case UPDATE_NEW_MESSAGE:
                this._updateNewMessage(action.newText);
                break;
            default:
                console.log('Error#1 : there is no this action type.');
        }
    },
}

/* Action Creators */

export const addPostActionCreator = () => ({
        type: ADD_POST,
    });

export const updateNewPostTextActionCreator = (newText) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    });

export const sendMessageActionCreator = () => ({
        type: SEND_MESSAGE,
    });

export const updateNewMessageActionCreator = (newText) => ({
        type: UPDATE_NEW_MESSAGE,
        newText: newText,
    });

/* Action Creators */

export default store;
window.store = store;