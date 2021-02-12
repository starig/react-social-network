import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(''));
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <Posts updateNewPostText={onPostChange}
               addPost={addPost}
               postsData={state.profilePage.postsData}
               newPostText={state.profilePage.newPostText} />
    );
}

export default PostsContainer;