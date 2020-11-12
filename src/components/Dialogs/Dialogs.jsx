import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FromsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img} />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
/*
  let newMessageBody = state.newMessageBody;
  */

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

  // редиректим на логин, если не залогинены props.isAuth === false ( мы написали, если не изАус = значит редирект)
  if (!props.isAuth)
      return <Redirect to = {"/login"} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogElements}</div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        </div>

      <div>
        <AddMessageReduxForm onSubmit ={addNewMessage}/>
      </div>
    </div>
  );
};

const maxLength20 = maxLengthCreator(20)

const AddMessageForm =(props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} component={Textarea}
                       name={"newMessageBody"} validate={[required, maxLength20]}/>
            </div>

            <div>
                <button> Send </button>
            </div>
        </form>
    </div>
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
}) (AddMessageForm)

export default Dialogs;
