import React from "react";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initialState = {
  dialogsData: [
    { id: 1, name: 'Dimych', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-TC0JUaNFfdi-dX5bCb8dgvjmqF5e_PeiBA&usqp=CAU' /> },
    { id: 2, name: 'Olich', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoVCFsMBJSK27E-DZN3NWLn7vMSgpU_Jj_7A&usqp=CAU' /> },
    { id: 3, name: 'Vitalich', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRscNwdWCv9wItbuv6MlltCyzHC6202CaiMTg&usqp=CAU' /> },
    { id: 4, name: 'Elvirych', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdzQ-yZwOAlfOXhvhBGwyGCePKsYTvLSC7dg&usqp=CAU' /> },
    { id: 5, name: 'Evelinych', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDHNWWznvhF_brrepwv2AjhHolUhTKBpWuSg&usqp=CAU' /> },
    { id: 6, name: 'Jenich', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU2sHHgl0IzsOe0huVOaiem0LpZhXR9TTmwA&usqp=CAU' /> }
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What' },
    { id: 4, message: 'are' },
    { id: 5, message: 'you' },
    { id: 6, message: 'doing' }
  ],
  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
          state.newMessageBody = '';
          state.messagesData.push({id: 7, message: body});
          return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
      type:SEND_MESSAGE
    }
  }
  
  export const updateNewMessageBodyCreator = (body) => {
    return {
      type:UPDATE_NEW_MESSAGE_BODY,
      body: body
    }
  }

export default dialogsReducer;