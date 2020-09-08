import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogElements}</div>

      <div className={s.messages}>{messagesElements}</div>

      <div>
        <div>
          <textarea ref={newMessageElement}> </textarea>
        </div>

        <div>
          <button onClick={addMessage}> Send </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
