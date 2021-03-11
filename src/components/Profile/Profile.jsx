import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import "./Profile.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilePage.newPostText} />
    </div>
  )
}

export default Profile;
