import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likeCounts={post.likeCounts} />
  ));

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

  return (
    <div className={k.postBlock}>
      <h3>My posts</h3>
      <div>
       <NewPostReduxForm onSubmit ={addNewPost} />
      </div>
      <div className={k.posts}>{postsElements}</div>
    </div>
  );
};

// onChange={onPostChange} ref={newPostElement} value={props.newPostText} достал из текстареа

const NewPostForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field  name = {"newPostText"} component={"textarea"} placeholder={"Your text for new post"}/>
      </div>
      <div>
        <button> Add post </button>
      </div>
    </form>
  </div>
}

const NewPostReduxForm = reduxForm({
  form: 'profileAddNewPostForm'
}) (NewPostForm)

export default MyPosts;
