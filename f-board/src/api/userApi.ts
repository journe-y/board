import axios, { AxiosError } from "axios"
import { handler } from "./errorHandle";

type CallbackFunction = () => void;

export function registerReq(url: string, data: any, callback: CallbackFunction, errCallback?: CallbackFunction) {
    axios.post(url, data).then((res) => {
        callback();
    }).catch((err: Error | AxiosError) => {
        handler(err);
        errCallback ? errCallback() : null;
    });
}


    // register: function (url: string, data: object, callback: Function, errCallback: Function) {
    //     axios.post(url, data).then((res) => {
    //         callback(res);
    //     }).catch((err: Error | AxiosError) => {
    //         handler(err);
    //         errCallback();
    //     });
    // },
    // errorHandling: function (response: any) {
    //     if (isInternalServerError(response.status)) {
    //         alert('죄송합니다. 서버에서 잠시 에러가 발생했습니다. 잠시후 다시 시도해주세요.');
    //         return;
    //     }
    //     if (isBadRequest(response.status)) {
    //         alert(response.data.msg);
    //         return;
    //     }

    //     function isInternalServerError(status: number): boolean {
    //         return status >= 500;
    //     }

    //     function isBadRequest(status: number): boolean {
    //         return 400 <= status && status < 500;
    //     }
    // }

