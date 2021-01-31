import React from 'react';
import Avatar from './Profile_comps/Avatar';
import Posts from './Profile_comps/Posts';
import UserInfo from './Profile_comps/UserInfo';
import classes from './Profile.module.css';

const Profile = (props) => {


    return (
        <div className={`${classes.profile}`}>
            <Avatar />
            <UserInfo />
            <Posts postsData={props.state.postsData}
                   addPost={props.addPost}
                   newPostText={props.newPostText}
                   updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;