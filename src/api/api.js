import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "0a6941c9-18c9-4e8f-bdf7-0c0980789a1c"}
})


export const userAPI = {
    getUsers (currentPage =1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count =${pageSize}`, {})
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile (userId) {
        console.warn("Deprecated method. Please use ProfileAPI")
        return  profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
        getProfile (userId) {
        return  instance.get(`profile/` + userId);
    },
    getStatus(userId) {
            return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
            return instance.put(`profile/status/`, { status:status })
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}

