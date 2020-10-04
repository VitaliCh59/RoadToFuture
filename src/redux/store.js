import React from 'react';
import Carousel from 'react-images';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', likeCounts: 12 },
        { id: 2, message: 'It \'s my first post', likeCounts: 2 },
        { id: 3, message: 'It \'s my second post', likeCounts: 30 }
      ],
      newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {

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
    },

    // sitebar: {

    // }
  },

  _callSubscriber() {
    console.log('Stage change')
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likeCounts: 0
  //   };
  //   this._state.profilePage.postData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText (newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {   //объект, описывающий, какое действие совершить {type: "ADD-POST" }
   
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

  this._callSubscriber(this._state);
}
}


export default store;