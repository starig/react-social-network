import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from './../../assets/img/avatarDefault.png';


let Users = (props) => {

    if (props.usersData.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });

    }

    return <div className={styles.users}>
        {
            props.usersData.map(user => <div key={user.id} className={styles.item}>
                    <div className={styles.avatar}>
                        <img alt={`avatar`} src={ user.photos.small != null
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
                        <div className={styles.location}>{`user.location.city + ', ' + user.location.country`}</  div>
                        <div className={styles.status}>{user.status}</div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;