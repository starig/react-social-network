import * as axios from "axios";
import {KEY} from "./api-key";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": KEY, //You can get your key there: https://social-network.samuraijs.com/
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
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(login, password) {
        return instance.post('auth/login', {email: login, password});
    },
    logout() {
        return instance.delete('auth/login');
    }
}
