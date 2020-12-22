import React from "react";
import k from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FromsControl/FormsControls";

const MyPosts = React.memo(props => {
console.log ("render")
    let postsElements = props.postData.map((post) => (
    <Post key={post.id} message={post.message} likeCounts={post.likeCounts} />
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
});

const maxLength15 = maxLengthCreator(15)

const NewPostForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate = {[required, maxLength15]} name = {"newPostText"} component={Textarea} placeholder={"Your text for new post"}/>
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
