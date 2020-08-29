import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dimych' },
    {id: 2, name: 'Olich' },
    {id: 3, name: 'Vitalich' },
    {id: 4, name: 'Elvirych' },
    {id: 5, name: 'Evelinych' },
    {id: 6, name: 'Jenich' }
  ];

  let messagesData = [
    {id: 1, message: 'Hi' },
    {id: 2, message: 'How are you?' },
    {id: 3, message: 'What' },
    {id: 4, message: 'are' },
    {id: 5, message: 'you' },
    {id: 6, message: 'doing' }
  ];
  
  let dialogElements = dialogsData
  .map (dialog => <DialogItem name = {dialog.name} id={dialog.id} />);

  let messagesElements = messagesData
  .map (message =>  <Message message={message.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
