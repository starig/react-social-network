import React from 'react';
import './Avatar.css';

const Avatar = () => {
    return(
        <div className="avatar">
            <img src="https://sun9-50.userapi.com/impg/v2V2NAsEUdKVicWi9Eum5T-8tnnPwpPMTlE-mw/236DtgObslI.jpg?size=720x960&quality=96&proxy=1&sign=df3d47bff68e193e2ffe0df620c3065f&type=album" className="avatar--img" />
            <div className="btn btn--edit">Edit</div>
        </div>
    );
}

export default Avatar;