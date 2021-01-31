import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessage, updateNewPostText} from './Redux/State';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 sendMessage={sendMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessage={updateNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

