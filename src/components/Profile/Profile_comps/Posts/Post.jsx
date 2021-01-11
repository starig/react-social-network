import React from 'react';
import classes from './Post.module.css';
import likeSvg from './img/like.svg';
import commentSvg from './img/comment.svg'

const Post = (props) => {
    return (
        <div className={`${classes.post}`}>
            <div className={`${classes.header}`}>
                <div className={`${classes.avatar}`}>
                    <img src="https://www.soyuz.ru/public/uploads/files/2/7222687/201808260137376da9d39a19.jpg" className={`${classes.avatarImg}`} alt='avatarImg'></img>
                </div>
                <div className={`${classes.header__info}`}>
                    <div className={`${classes.username}`} >
                        Shrek
                    </div>
                    <div className={`${classes.date}`}>
                        12.12.2002
                    </div>
                    </div>
            </div>
            <div className={`${classes.content}`}>
                {props.message}
            </div>
            <div className={`${classes.footer}`} >
                <div className={`${classes.like} ${classes.postSvgSection}`}>
                    <img src={likeSvg} alt='likeSvg' className={`${classes.postSvg}`} /> 
                    <div className={`${classes.svgCounter}`}>{props.likeCount}</div>
                </div>
                <div className={`${classes.comment} ${classes.postSvgSection}`}>
                    <img src={commentSvg} alt='commentSvg' className={`${classes.postSvg}`} />
                    <div className={`${classes.svgCounter}`}>{props.commentCount}</div>
                </div>
            </div>
        </div>
    );
}

export default Post;