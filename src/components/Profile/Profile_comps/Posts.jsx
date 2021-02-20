import React from 'react';
import mainClasses from './../Profile.module.css';
import classes from './Posts.module.css';
import Post from './Posts/Post';


class Posts extends React.Component {


    postsElements = this.props.postsData.map(post => <Post message={post.message}
                                                          key={post.id}
                                                          likeCount={post.likesCount}
                                                          commentCount={post.commentCount}/>);

    newPostElement = React.createRef();


    addPost = () => {
        this.props.addPost();
    }

    onPostChange = () => {
        let text = this.newPostElement.current.value;
        this.props.onPostChange(text);
    }

    render() {
        return (
            <div className={`${mainClasses.Posts}`}>
                <div className={`${classes.Posts__title}`}>My posts</div>
                <div className={`${classes.Posts__new}`}>
                    <div className={`${classes.Posts__input}`} >
                        <div className={`${classes.Posts__new__title}`}>New post</div>
                        <div className={`${classes.Posts__new__subtitle}`} >
                            <input className={`${classes.Post__input}`} ref={this.newPostElement}
                                   placeholder={`It is my new post!`} value={this.props.newPostText} onChange={this.onPostChange}/>
                        </div>
                        <div className={`${mainClasses.btn} ${classes.btn__send}`} onClick={this.addPost}>send</div>
                    </div>
                </div>
                <div className={`${classes.Posts__all}`}>
                    {this.postsElements}
                </div>
            </div>
        );
    }
}

export default Posts;