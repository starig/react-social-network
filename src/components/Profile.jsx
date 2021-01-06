import React from 'react';
import Avatar from './Profile_comps/Avatar';
import Posts from './Profile_comps/Posts';
import UserInfo from './Profile_comps/UserInfo';
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            {/* <img src="https://theinpaint.com/images/example-1-2.jpg"></img> */}
            {/* <div className="userInfo">
                avatar + description
            </div>
            <div className="posts">
                Post
            <div className="newPost">New post</div>
            </div> */}
            <Avatar />
            <UserInfo />
            <Posts />
        </div>
    );
}

export default Profile;