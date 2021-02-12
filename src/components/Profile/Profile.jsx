import React from 'react';
import Avatar from './Profile_comps/Avatar';
import UserInfo from './Profile_comps/UserInfo';
import classes from './Profile.module.css';
import PostsContainer from "./Profile_comps/PostsContainer";

const Profile = () => {
    return (
        <div className={`${classes.profile}`}>
            <Avatar />
            <UserInfo />
            <PostsContainer />
        </div>
    );
}

export default Profile;