import React from "react";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    postData: [
      { id: 1, message: 'Hi, how are you?', likeCounts: 12 },
      { id: 2, message: 'It \'s my first post', likeCounts: 2 },
      { id: 3, message: 'It \'s my second post', likeCounts: 30 }
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
              };
             state.postData.push(newPost);
              state.newPostText = '';
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
      type:UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }

export default profileReducer;