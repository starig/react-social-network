import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                    store.dispatch(updateNewPostTextActionCreator(''));
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return (
                    <Posts updateNewPostText={onPostChange}
                           addPost={addPost}
                           postsData={state.profilePage.postsData}
                           newPostText={state.profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export default PostsContainer;