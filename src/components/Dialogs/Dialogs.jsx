import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Olich" id="2" />
        <DialogItem name="Vitalich" id="3" />
        <DialogItem name="Elvirych" id="4" />
        <DialogItem name="Evelinych" id="5" />
        <DialogItem name="Jenich" id="6" />
      </div>

      <div className={s.messages}>
        <Message message="hi" />
        <Message message="How are you?" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
