const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, my name is Shrek!', likesCount: 5, commentCount: 3},
        {id: 1, message: 'It is my first post!', likesCount: 24, commentCount: 12},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                commentCount: 0,
            }
            state.postsData.unshift(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
});

export default profileReducer;