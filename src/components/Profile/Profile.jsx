import React from 'react';
import Avatar from './Profile_comps/Avatar';
import UserInfo from './Profile_comps/UserInfo';
import classes from './Profile.module.css';
import PostsContainer from "./Profile_comps/PostsContainer";
import Preloader from "../common/Preloader";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={`${classes.profile}`}>
            <Avatar profile={props.profile}/>
            <UserInfo profile={props.profile}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;