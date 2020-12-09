import React from "react";
import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    newPostText: 'it-kamasutra.com',
    isFetching: true,
    followingInProgress: []
};

// reducer - чистая функция, которая принимает старый стэйт, экшон, если нужно,
// модифицирует этот старый стэйт по правилам иммьютабельности и возвращает измененную
// копию, либо нетронутый стэйт, если его менять не надо было

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                /* users: state.users.map(user => {
                     if (user.id === action.userId) {
                         return {...user, followed: true}
                     }
                     return user;
                 })
             } // map возвращает новый массив на основе старого массива
 */
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }

        case SET_USERS: {
            return {...state, users: action.users}
        } // перезатираем старых пользователей новыми с сервера

        case  SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
            // пропускаем только ту айди, которая не равна той, которая пришла в экшене(которую мы фолловим/анфолловим
        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}// action creator

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
// ниже те же самые АС, только в одну строку
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

//thunk
export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true));

        let data = await userAPI.getUsers(page, pageSize);

        dispatch(setToggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
       // let apiMethod = userAPI.follow.bind(userId);
       //let actionCreator = followSuccess(userId);
        await followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        //let apiMethod = userAPI.unfollow.bind(userId);
        //let actionCreator = unfollowSuccess(userId);
        await followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess);
    }
}

export default userReducer;