import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hello, my name is Shrek!', likesCount: 5, commentCount: 3},
    {id: 1, message: 'It is my first post!', likesCount: 24, commentCount: 12},
];

let dialogsData = [
    {id: 1, name: "Ivan Starkov"},
    {id: 2, name: "Sofia Protasova"},
    {id: 3, name: "Andrey Ten"},
];

let messagesData = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "All is good, thanks"},
];

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
