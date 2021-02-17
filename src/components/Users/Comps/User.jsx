import React from 'react';
import styles from './User.module.css';

const User = (props) => {

    let unfollow = () => {
        props.unfollow();
    }

    let buttonClass;
    if(props.followed) {
        buttonClass = styles.followButton;
    } else {
        buttonClass = styles.unfollowButton;
    }

    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
                <img alt={`Avatar`} className={styles.avatarImg} src={props.avatar} />
                <div className={buttonClass}>
                    {props.followed ? <div className={buttonClass} onClick={ () => {props.follow(props.id)} } > follow </div> :
                        <div className={buttonClass} onClick={unfollow} > unfollow </div>}
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.name}>
                    {props.username}
                </div>
                <div className={styles.location}>
                    {props.location}
                </div>
                <div className={styles.status}>
                    {props.status}
                </div>
            </div>
        </div>
    );
}

export default User;