import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/avatarDefault.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.count);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div className={styles.users}>
        {
            props.usersData.map(user => <div key={user.id} className={styles.item}>
                    <div className={styles.avatar}>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt={`avatar`} src={user.photos.small != null
                                ? user.photos.small : userPhoto} className={styles.avatarImg}/>
                        </NavLink>
                        {
                            user.followed
                                ? <div
                                    className={`${styles.unfollowButton} ${props.followingInProgress.some(id => id === user.id)
                                        ? styles.disabledButton : ''}`}
                                    onClick={() => {props.unfollow(user.id)}}>unfollow</div>
                                : <div
                                    className={`${styles.followButton} ${props.followingInProgress.some(id => id === user.id)
                                        ? styles.disabledButton : ''}`}
                                    onClick={() => {props.follow(user.id)}}>follow</div>
                        }
                    </div>
                    <div className={styles.box}>
                        <div className={styles.name}>{user.name}</div>
                        <div className={styles.location}>{`user.location.city + ', ' + user.location.country`}</div>
                        <div className={styles.status}>{user.status}</div>
                    </div>
                </div>
            )
        }
        <div className={styles.navigation}>
            {pages.map(page => {
                return <div className={`${props.currentPage === page && styles.currentPage} ${styles.navItem}`}
                            onClick={() => {
                                props.onPageChanged(page)
                            }}>{page}</div>
            })}
        </div>
    </div>
}

export default Users;