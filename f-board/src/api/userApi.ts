import axios, { AxiosError } from "axios"
import { handler } from "./errorHandle";
import { CallbackFunction, User } from "./type";

export function registerReq(url: string, data: User, callback: CallbackFunction, errCallback?: CallbackFunction) {
    axios.post(url, data).then((res) => {
        callback();
    }).catch((err: Error | AxiosError) => {
        errCallback ? errCallback(handler(err)) : null;
    });
}

export function loginReq(url: string, data: User, callback: CallbackFunction, errCallback?: CallbackFunction) {
    axios.post(url, data).then((res) => {
        callback(res);
    }).catch((err) => {
        errCallback ? errCallback(handler(err)) : null;
    });
}
