import React from 'react';
import styles from './Users.module.css'


let Users = (props) => {
    return <div className={styles.users}>
        {
            props.usersData.map( user => <div key={user.id} className={styles.item}>
                <div className={styles.avatar}>
                    <img alt={`avatar`} src={user.avatar} className={styles.avatarImg}/>
                    {
                        user.followed
                            ? <div className={styles.unfollowButton} onClick={() => {props.unfollow(user.id)}} >unfollow</div>
                            : <div className={styles.followButton} onClick={() => {props.follow(user.id)}}>follow</div>
                    }
                </div>
                <div className={styles.box}>
                    <div className={styles.name}>{user.name}</div>
                    <div className={styles.location}>{user.location.city + ', ' + user.location.country}</  div>
                    <div className={styles.status}>{user.status}</div>
                </div>
            </div>
            )
        }
    </div>
}

export default Users;