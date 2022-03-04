import axios from "axios"
import { User } from "./type";

export function registerReq(data: User) {
    return axios.post('https://toyboard.herokuapp.com/auth/register', data);
}

export function loginReq(data: User) {
    return axios.post("https://toyboard.herokuapp.com/auth/login", data);
}
