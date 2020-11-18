import React from "react";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized:false
};

// reducer - чистая функция, которая принимает старый стэйт, экшон, если нужно,
// модифицирует этот старый стэйт по правилам иммьютабельности и возвращает измененную
// копию, либо нетронутый стэйт, если его менять не надо было

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
               initialized: true
            };

        default:
            return state;
    }
}


//AC
export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});
// срабатывает, когда логинизация прошла

export const initializeApp = () => (dispatch) => {
        // dispatch ассинхронной санки (может долго выполняться)
        // если мы из санки в апп редьюсере вернем сюда что-то...
    let promise = dispatch(getAuthUserData());
    //когда все промисы зарезолвятся, вызови инишл саксесс
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    })
}



export default appReducer;