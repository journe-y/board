import axios from "axios";
import { handler } from "./errorHandle";
import store from '../store';
import { CallbackFunction } from "./type";

export function authReq(URL: string, success: CallbackFunction, error: CallbackFunction, reqData?: any): void {
    axios.post(URL, reqData ? reqData : {}, { headers: { "Authorization": `${localStorage.getItem('accessToken')}` } })
        .then(() => {
            success();
        }).catch((err) => {
            if (handler(err) === '토큰만료') {
                axios.post('/refresh', reqData ? reqData : {}, { headers: { 'Content-Type': 'application/json', "refreshtoken": `${localStorage.getItem('refreshToken')}` } })
                    .then(({ data }) => {
                        localStorage.setItem("accessToken", data.token);
                        localStorage.setItem("refreshToken", data.refreshToken);
                        reqData ? authReq(URL, success, error, reqData) : success();
                    }).catch(() => {
                        logoutReq()
                        error()
                        store.commit("SET_ON_MODAL", true)
                    });
            } else if (handler(err) === '유효하지않은토큰') {
                logoutReq()
                store.commit("SET_ON_MODAL", true)
                error()

            }
        });
}

export function logoutReq() {
    store.commit("SET_AUTH", false);
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
}