import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
    <NavLink to={path}> {props.name} </NavLink>
  </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogItem name="Dimych" id="1"/>
        <DialogItem name="Olich" id="2"/>
        <DialogItem name="Vitalich" id="3"/>
        <DialogItem name="Elvirych" id="4"/>
        <DialogItem name="Evelinych" id="5"/>
        <DialogItem name="Jenich" id="6"/>
      </div>

      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How are you?</div>
        <div className={s.dialog}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
