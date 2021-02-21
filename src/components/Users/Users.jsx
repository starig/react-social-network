import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/avatarDefault.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.count);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.users}>
        <div className={styles.navigation}>
            {pages.map(page => {
                return <div className={`${props.currentPage === page && styles.currentPage} ${styles.navItem}`}
                            onClick={() => {
                                props.onPageChanged(page)
                            }}>{page}</div>
            })}
        </div>
        {
            props.usersData.map(user => <div key={user.id} className={styles.item}>
                    <div className={styles.avatar}>
                        <img alt={`avatar`} src={user.photos.small != null
                            ? user.photos.small : userPhoto} className={styles.avatarImg}/>
                        {
                            user.followed
                                ? <div className={styles.unfollowButton} onClick={() => {
                                    props.unfollow(user.id)
                                }}>unfollow</div>
                                : <div className={styles.followButton} onClick={() => {
                                    props.follow(user.id)
                                }}>follow</div>
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
    </div>
}

export default Users;