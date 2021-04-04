import {addPostActionCreator} from '../../../Redux/profile-reducer';
import Posts from './Posts';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);