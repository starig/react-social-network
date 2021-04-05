import React from 'react';
import Avatar from './Profile_comps/Avatar';
import UserInfo from './Profile_comps/UserInfo';
import classes from './Profile.module.css';
import PostsContainer from "./Profile_comps/PostsContainer";
import Preloader from "../common/Preloader";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    if (!props.isAuth) {
        return <Redirect to={`/login`} />
    }
    return (
        <div className={`${classes.profile}`}>
            <Avatar profile={props.profile}/>
            <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;