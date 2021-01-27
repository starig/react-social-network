import React from 'react';
import mainClasses from './../Profile.module.css';
import classes from './Posts.module.css';
import Post from './Posts/Post';

const Posts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likeCount={post.likesCount} commentCount={post.commentCount}/>);


    return (
        <div className={`${mainClasses.Posts}`}>
            <div className={`${classes.Posts__title}`}>My posts</div>
            <div className={`${classes.Posts__new}`}>
                <div className={`${classes.Posts__input}`} >
                    <div className={`${classes.Posts__new__title}`}>New post</div>
                    <div className={`${classes.Posts__new__subtitle}`} >
                        <input className={`${classes.Post__input}`} placeholder={`It is my new post!`} />
                    </div>
                    <div className={`${mainClasses.btn} ${classes.btn__send}`}>send</div>
                </div>
            </div>
            <div className={`${classes.Posts__all}`}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;