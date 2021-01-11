import React from 'react';
import mainClasses from './../Profile.module.css';
import classes from './Posts.module.css';
import Post from './Posts/Post';

const Posts = () => {
    return (
        <div className={`${mainClasses.Posts}`}>
            <div className={`${classes.Posts__title}`}>My posts</div>
            <div className={`${classes.Posts__new}`}>
                <div className={`${classes.Posts__input}`} >
                    <div className={`${classes.Posts__new__title}`}>New post</div>
                    <div className={`${classes.Posts__new__subtitle}`} contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi.</div>
                    <div className={`${mainClasses.btn} ${classes.btn__send}`}>send</div>
                </div>
            </div>
            <div className={`${classes.Posts__all}`}>
                <Post message='Hello, my name is Shrek!' likeCount='5' commentCount='3'/>
                <Post message='It is my first post!' likeCount='24' commentCount='12'/>
            </div>
        </div>
    );
}

export default Posts;