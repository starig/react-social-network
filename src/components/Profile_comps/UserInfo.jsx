import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className="UserInfo">
            <div className="UserInfo--header">
                <div className="user--name">
                    Ivan Starkov
                    <div className="user--subtitle">Hello world!</div>
                </div>
                <div className="user--status">Online</div>
            </div>
            <div className="UserInfo--main">
                <div className="UserInfo--ul">
                    <div className="UserInfo--li">
                        <div className="UserInfo--li--title">Education: </div>
                        <div className="UserInfo--li--subtitle">ITMO University</div>
                    </div>
                    <div className="UserInfo--li">
                        <div className="UserInfo--li--title">Age: </div>
                        <div className="UserInfo--li--subtitle">18</div>
                    </div>
                    <div className="UserInfo--li">
                        <div className="UserInfo--li--title">City: </div>
                        <div className="UserInfo--li--subtitle">Saint-Petersburg</div>
                    </div>
                </div>
            </div>
            <div className="UserInfo--footer">
                <a href="" className="UserInfo--footer--item">
                    <div className="item--count">168</div>
                    <div className="label">Friends</div>
                </a>
                <a href="" className="UserInfo--footer--item">
                    <div className="item--count">200</div>
                    <div className="label">Followers</div>
                </a>
                <a href="" className="UserInfo--footer--item">
                    <div className="item--count">8</div>
                    <div className="label">Photos</div>
                </a>
                <a href="" className="UserInfo--footer--item">
                    <div className="item--count">75</div>
                    <div className="label">Groups</div>
                </a>
                <a href="" className="UserInfo--footer--item">
                    <div className="item--count">1023</div>
                    <div className="label">Tracks</div>
                </a>
            </div>
        </div>
    );
}

export default UserInfo;