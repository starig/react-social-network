import React from 'react';
import mainClasses from './../Profile.module.css'
import classes from './Avatar.module.css';
import avatar from '../../../assets/img/userAvatar.jpg'

const Avatar = (props) => {
    return(
        <div className={`${mainClasses.avatar}`}>
            <img src={props.profile.photos.large ? props.profile.photos.large : avatar}
                 className={`${classes.avatar__img}`} alt={'Avatar'} />
            <div className={`${mainClasses.btn} ${classes.btn__edit}`}>Edit</div>
        </div>
    );
}

export default Avatar;