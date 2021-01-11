import React from 'react';
import mainClasses from './../Profile.module.css'
import classes from './Avatar.module.css';

const Avatar = () => {
    return(
        <div className={`${mainClasses.avatar}`}>
            <img src="https://sun9-50.userapi.com/impg/v2V2NAsEUdKVicWi9Eum5T-8tnnPwpPMTlE-mw/236DtgObslI.jpg?size=720x960&quality=96&proxy=1&sign=df3d47bff68e193e2ffe0df620c3065f&type=album" className={`${classes.avatar__img}`} />
            <div className={`${mainClasses.btn} ${classes.btn__edit}`}>Edit</div>
        </div>
    );
}

export default Avatar;