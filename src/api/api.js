import * as axios from "axios";
import {KEY} from "./api-key";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": KEY,
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, count = 3) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
}
