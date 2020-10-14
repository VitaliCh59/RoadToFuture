import React from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [],
    newPostText: 'it-kamasutra.com'
};

// reducer - чистая функция, которая принимает старый стэйт, экшон, если нужно,
// модифицирует этот старый стэйт по правилам иммьютабельности и возвращает измененную
// копию, либо нетронутый стэйт, если его менять не надо было

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            } // map возвращает новый массив на основе старого массива

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        } // перезатираем старых пользователей новыми с сервера

        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}// action creator

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default userReducer;