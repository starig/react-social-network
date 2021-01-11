import React from 'react';
import classes from './UserInfo.module.css';
import mainClasses from './../Profile.module.css'

const UserInfo = () => {
    return (
        <div className={`${classes.UserInfo}`}>
            <div className={`${classes.UserInfo__header}`}>
                <div className={`${classes.user__name}`}>
                    Ivan Starkov
                    <div className={`${classes.user__subtitle}`}>Hello world!</div>
                </div>
                <div className={`${classes.user__status}`}>Online</div>
            </div>
            <div className={`${classes.UserInfo__main}`}>
                <div className={`${classes.UserInfo__ul}`}>
                    <div className={`${classes.UserInfo__li}`}>
                        <div className={`${classes.UserInfo__li__title}`}>Education: </div>
                        <div className={`${classes.UserInfo__li__subtitle}`}>ITMO University</div>
                    </div>
                    <div className={`${classes.UserInfo__li}`}>
                        <div className={`${classes.UserInfo__li__title}`}>Age: </div>
                        <div className={`${classes.UserInfo__li__subtitle}`}>18</div>
                    </div>
                    <div className={`${classes.UserInfo__li}`}>
                        <div className={`${classes.UserInfo__li__title}`}>City: </div>
                        <div className={`${classes.UserInfo__li__subtitle}`}>Saint-Petersburg</div>
                    </div>
                </div>
            </div>
            <div className={`${classes.UserInfo__footer}`}>
                <a href="" className={`${classes.UserInfo__footer__item}`}>
                    <div className={`${classes.item__count}`}>168</div>
                    <div className={`${classes.label}`}>Friends</div>
                </a>
                <a href="" className={`${classes.UserInfo__footer__item}`}>
                    <div className={`${classes.item__count}`}>200</div>
                    <div className={`${classes.label}`}>Followers</div>
                </a>
                <a href="" className={`${classes.UserInfo__footer__item}`}>
                    <div className={`${classes.item__count}`}>8</div>
                    <div className={`${classes.label}`}>Photos</div>
                </a>
                <a href="" className={`${classes.UserInfo__footer__item}`}>
                    <div className={`${classes.item__count}`}>75</div>
                    <div className={`${classes.label}`}>Groups</div>
                </a>
                <a href="" className={`${classes.UserInfo__footer__item}`}>
                    <div className={`${classes.item__count}`}>1023</div>
                    <div className={`${classes.label}`}>Tracks</div>
                </a>
            </div>
        </div>
    );
}

export default UserInfo;