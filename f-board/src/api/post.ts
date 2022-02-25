import axios from "axios";
import { authReq } from "./authRequest";
import { CallbackFunction, Post } from "./type";


export function writePostReq(url: string, data: Post, success: CallableFunction, error: CallbackFunction) {
    authReq("/post/create", () => {
        success()
    }, () => {
        error();
    }, data);
}

export function getPostsReq(url: string, success: CallbackFunction) {
    axios.get(url)
        .then((res) => {
            success(res)
        })
}

export function getPostDetail(url: string, success: CallableFunction) {
    axios.get(url).then((res)=>{
        success(res.data.post);
    }).catch((error)=>{
        console.log('eeeeeeeeeeeeeeeeee'+error)
    })
}