import React from "react";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    captchaUrl: null // if null, then captcha is not required
};

// reducer - чистая функция, которая принимает старый стэйт, экшон, если нужно,
// модифицирует этот старый стэйт по правилам иммьютабельности и возвращает измененную
// копию, либо нетронутый стэйт, если его менять не надо было

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({type:GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })


// если ретурнуть санку (me) то вернется промис в апп редюсер
export const getAuthUserData = () => async (dispatch) => {
        let response = await  authAPI.me();
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
           let response = await authAPI.login(email, password, rememberMe, captcha);
                if (response.data.resultCode === 0) {
                    //success, get auth data
                    dispatch(getAuthUserData())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages [0] : "some error";
                    dispatch(stopSubmit("login", {_error: message}))
                }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
}


export default authReducer;