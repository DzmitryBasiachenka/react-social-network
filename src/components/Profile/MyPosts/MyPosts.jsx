import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi', likesCount: 1 },
    { id: 2, message: 'Go', likesCount: 100 }
  ]

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
