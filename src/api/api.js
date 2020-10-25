import * as axios from "axios";
import user from "../redux/store";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "82fdcb69-fcd9-4679-b7df-51762d66e4a3"}
})

export const userAPI = {

   getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count =${pageSize}`, {})
            .then(response => {
                return response.data;
            });
    },

    //TODO: не работает подписка отписка 63 урок сломал

   followUsers(user){
        return instance.get(`follow${user.id}`, {}, {})
            .then(response => {
                return response.data;
            });
    }
}