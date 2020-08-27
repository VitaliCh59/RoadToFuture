import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={k.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea> </textarea>
        </div>
        <div>
          <button> Add post </button>
        </div>
      </div>
      <div className={k.posts}>
        <Post message="Hi, how are you?" likeCounts="12" />
        <Post message="It's my first post" likeCounts="2" />
      </div>
    </div>
  );
};

export default MyPosts;
