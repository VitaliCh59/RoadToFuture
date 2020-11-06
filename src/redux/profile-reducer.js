import React from "react";
import {profileAPI, userAPI} from "../api/api";
import {toggleFollowingProgress} from "./users-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 12},
        {id: 2, message: 'It \'s my first post', likeCounts: 2},
        {id: 3, message: 'It \'s my second post', likeCounts: 30}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText:  ''
        };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return  {
                ...state,
                status: action.status
            }

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
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
// экшн креатор возвращает нам объект(экшон) в котором инкапсулированы все данные,
// чтоб редьюсор получил экшон и применил изменения на стэйт

export const setStatus = (status) => ({type:SET_STATUS, status})

//thunk
export const getUserProfile = (userId) => (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            })
    }

export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
                dispatch(setStatus(response.data));
            })
    }

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
}


export default profileReducer;