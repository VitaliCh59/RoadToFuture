import React from "react";
import k from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData = {props.profilePage.postData} 
      newPostText={props.profilePage.newPostText}
      addPost = {props.addPost}
      updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Profile;
