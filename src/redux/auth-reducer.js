import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

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
               ...action.payload
            };

        default:
            return state;
    }
}



export const setAuthUserData = (userId, email, login, isAuth) => ({type:SET_USER_DATA, payload: {userId, email, login, isAuth} })
// срабатывает, когда логинизация прошла

// если ретурнуть санку (me) то вернется промис в апп редюсер
export const getAuthUserData = () => (dispatch) => {
        return  authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
}

export const login = (email, password, rememberMe) => (dispatch) => {
           authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages [0] : "some error";
                    dispatch(stopSubmit("login", {_error: message}))
                }
            });
}

export const logout = () =>(dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }

        });
}


export default authReducer;