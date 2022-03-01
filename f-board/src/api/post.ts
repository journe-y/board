import axios from "axios";
import { CallbackFunction, Post } from "./type";

export function getPostsReq(url: string, success: CallbackFunction) {
    axios.get(url)
        .then((res) => {
            success(res)
        })
}

export function getPostDetail(url: string, success: CallableFunction) {
    axios.get(url).then((res) => {
        success(res.data.post);
    }).catch((error) => {
        console.log(error.msg)
    })
}
