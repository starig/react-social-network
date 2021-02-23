import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import Posts from './Posts';
import {connect} from "react-redux";
import * as React from "react";

/*class PostsContainer extends React.Component {
    render() {
        return <Posts />
    }
}*/


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTextActionCreator(''));
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);