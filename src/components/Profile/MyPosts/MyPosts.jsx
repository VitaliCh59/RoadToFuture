import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hi, how are you?', likeCounts: 12 },
    {id: 2, message: 'It \'s my first post', likeCounts: 2 },
    {id: 3, message: 'It \'s my second post', likeCounts: 30 }
  ];

let postsElements = postData
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
