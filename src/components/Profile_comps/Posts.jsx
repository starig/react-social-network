import React from 'react';
import './Posts.css';

const Posts = () => {
    return (
        <div className="Posts">
            <div className="Posts--title">My posts</div>
            <div className="Posts--new">
                <div className="Posts--input" >
                    <div className="Posts--new--title">New post</div>
                    <div className="Posts--new--subtitle" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi.</div>
                    <div className="btn btn--send">send</div>
                </div>
            </div>
            <div className="Posts--all">
                <div className="Posts--post">
                    <div className="Posts--post--title" >
                        <div className="title--username">Shrek</div>
                        <img src="https://www.soyuz.ru/public/uploads/files/2/7222687/201808260137376da9d39a19.jpg" className="Post--avatar"></img>
                    </div>
                    <div className="Posts--post--subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sed?
                    </div>
                </div>
                <div className="Posts--post">
                    <div className="Posts--post--title" >
                        <div className="title--username">Shrek</div>
                        <img src="https://www.soyuz.ru/public/uploads/files/2/7222687/201808260137376da9d39a19.jpg" className="Post--avatar"></img>
                    </div>
                    <div className="Posts--post--subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sed?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;