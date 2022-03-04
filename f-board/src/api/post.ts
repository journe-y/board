import router from "@/router";
import store from "@/store";
import axios from "axios";
import { PostDetail } from "./type";

export function getPostsReq(): any{
    return axios.get("https://toyboard.herokuapp.com/post/list");
} 

export function getPostDetail(id: number) {
    return axios.get(`https://toyboard.herokuapp.com/post/read/${id}`)
}

