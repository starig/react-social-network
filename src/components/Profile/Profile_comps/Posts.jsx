import React from 'react';
import mainClasses from './../Profile.module.css';
import classes from './Posts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";


const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={`${classes.Posts__new}`}>
                <div className={`${classes.Posts__input}`}>
                    <div className={`${classes.Posts__new__title}`}>New post</div>
                    <div className={`${classes.Posts__new__subtitle}`}>
                        <Field component={Input}
                               name={'newPostText'}
                               placeholder={`It is my new post!`}
                               autocomplete="off" validate={[required, maxLength50]}/>
                    </div>
                    <button className={`${mainClasses.btn} ${classes.btn__send}`}>send</button>
                </div>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const Posts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message}
                                                          key={post.id}
                                                          likeCount={post.likesCount}
                                                          commentCount={post.commentCount}/>);

    let addPost = (values) => {
        props.addPost(values.newPostText);
    }
    return <div className={`${mainClasses.Posts}`}>
        <div className={`${classes.Posts__title}`}>My posts</div>
        <PostReduxForm onSubmit={addPost}/>
        <div className={`${classes.Posts__all}`}>
            {postsElements}
        </div>
    </div>
}

export default Posts;