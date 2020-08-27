import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea> </textarea>
        <button> Add post </button>
      </div>
      <div className={k.posts}>
        <Post message='Hi, how are you?' likeCounts='12'/>
        <Post message="It's my first post" likeCounts='2'/>
      </div>
    </div>
  );
};

export default MyPosts;
