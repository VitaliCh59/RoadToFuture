import React from "react";
import {profileAPI, userAPI} from "../api/api";
import {toggleFollowingProgress} from "./users-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


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
                message: action.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postData.filter(post => post.id !== action.postId)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
// экшн креатор возвращает нам объект(экшон) в котором инкапсулированы все данные,
// чтоб редьюсор получил экшон и применил изменения на стэйт
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


//thunk
export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;