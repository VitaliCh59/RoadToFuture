import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
      props.sendMessage();
  };

  let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogElements}</div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        </div>

      <div>
        <div>
          <textarea value = {newMessageBody} onChange={onNewMessageChange} placeholder = "Enter your message"> </textarea>
        </div>

        <div>
          <button onClick={onSendMessageClick}> Send </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
