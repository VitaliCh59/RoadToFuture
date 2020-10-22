import React from "react";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING ="TOGGLE_IS_FETCHING"


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
            }

        default:
            return state;
    }
}



export const setAuthUserData = (userId, email, login) => ({type:SET_USER_DATA, data: {userId, email, login}})


export default authReducer;