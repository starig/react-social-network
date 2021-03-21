import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "26804047-f33d-4429-9080-2160da856fee",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, count = 3) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}
