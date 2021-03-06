import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://cdn3.iconfinder.com/data/icons/the-face-says-it-all/900/emoji-face-emotions-smile-512.png' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;
