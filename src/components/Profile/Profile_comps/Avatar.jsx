import React from 'react';
import mainClasses from './../Profile.module.css'
import classes from './Avatar.module.css';
import avatar from '../../../assets/img/userAvatar.jpg'
import Preloader from "../../common/Preloader";

const Avatar = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    return(
        <div className={`${mainClasses.avatar}`}>
            <img src={props.profile.photos.large ? props.profile.photos.large : avatar}
                 className={`${classes.avatar__img}`} alt={'Avatar'} />
            <div className={`${mainClasses.btn} ${classes.btn__edit}`}>Edit</div>
        </div>
    );
}

//TODO Сделать описание(статус, контакты и т.п)

export default Avatar;