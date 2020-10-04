import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActoinCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likeCounts={post.likeCounts} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActoinCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text});
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={k.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}  /> 
        </div>
        <div>
          <button onClick={addPost}> Add post </button>
        </div>
      </div>
      <div className={k.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
