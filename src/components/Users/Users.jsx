import React from 'react';
import User from "./Comps/User";
import styles from './Comps/User.module.css'

let Users = (props) => {


    let UsersElements = props.usersData.map(user => <User key={user.id}
                                                          followed={user.followed}
                                                          username={user.name}
                                                          status={user.status}
                                                          location={user.location.city + ', ' + user.location.country}
                                                          avatar={user.avatar}/>);
    return (
        <div className={styles.users}>
            {UsersElements}
        </div>
    );
}

export default Users;