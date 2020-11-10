import React from "react";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGIN = "LOGIN"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
};

// reducer - чистая функция, которая принимает старый стэйт, экшон, если нужно,
// модифицирует этот старый стэйт по правилам иммьютабельности и возвращает измененную
// копию, либо нетронутый стэйт, если его менять не надо было

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.data,
                isAuth: true
            };
        case LOGIN:
            return {
                ...state,
                login: action.data
            }

        default:
            return state;
    }
}



export const setAuthUserData = (userId, email, login) => ({type:SET_USER_DATA, data: {userId, email, login}})
export const setAuthUserDataLogin = (email, password, rememberMe) => ({type:LOGIN, data: {email, password, rememberMe}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }

            });
    }
}

export const getAuthUserDataLogin = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, password, rememberMe} = response.data.data;
                    dispatch(setAuthUserDataLogin(email, password, rememberMe));
                }

            });
    }
}


export default authReducer;