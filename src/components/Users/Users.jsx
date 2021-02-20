import React from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from './../../assets/img/avatarDefault.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div className={styles.users}>
            {
                this.props.usersData.map(user => <div key={user.id} className={styles.item}>
                        <div className={styles.avatar}>
                            <img alt={`avatar`} src={user.photos.small != null
                                ? user.photos.small : userPhoto} className={styles.avatarImg}/>
                            {
                                user.followed
                                    ? <div className={styles.unfollowButton} onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>unfollow</div>
                                    : <div className={styles.followButton} onClick={() => {
                                        this.props.follow(user.id)
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
}

export default Users;