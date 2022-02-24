import { authReq } from "./authRequest";
import { CallbackFunction, Post } from "./type";


export function writePostReq(url: string, data: Post, success: CallableFunction, error: CallbackFunction) {
    authReq("/post/create", () => {
        success()
    }, () => {
        error();
    }, data);

}