import React from 'react';
import Avatar from './Profile_comps/Avatar';
import UserInfo from './Profile_comps/UserInfo';
import classes from './Profile.module.css';
import PostsContainer from "./Profile_comps/PostsContainer";

const Profile = (props) => {
    return (
        <div className={`${classes.profile}`}>
            <Avatar profile={props.profile}/>
            <UserInfo profile={props.profile}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;