import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

let postsElements = props.postData
.map (post => <Post message={post.message} likeCounts = {post.likeCounts} />)

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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
