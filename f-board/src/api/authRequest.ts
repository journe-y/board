import axios from "axios";
import { handler } from "./errorHandle";
import store from '../store';
import { CallbackFunction } from "./type";

export function authReq(URL: string, success: CallbackFunction, error: CallbackFunction, reqData?: any): void {
    axios.post(URL, reqData ? reqData : {}, { headers: { "Authorization": `${localStorage.getItem('accessToken')}` } })
        .then((res) => {
            success(res);
        })
        .catch((err) => {
            if (handler(err) === '토큰만료') {
                axios.post('https://toyboard.herokuapp.com/refresh', reqData ? reqData : {}, { headers: { 'Content-Type': 'application/json', "refreshtoken": `${localStorage.getItem('refreshToken')}` } })
                    .then(({ data }) => {
                        localStorage.setItem("accessToken", data.token);
                        localStorage.setItem("refreshToken", data.refreshToken);
                        authReq(URL, success, error, reqData)
                    })
            } else if (handler(err) === '유효하지않은토큰') {
                logoutReq()
                store.commit("SET_ON_MODAL", true)
                error()

            } else {
                error(handler(err))
            }
        });
}

export function logoutReq() {
    store.commit("SET_AUTH", null);
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userid')
}