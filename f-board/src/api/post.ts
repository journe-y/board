import { authReq } from "./authRequest";
import axios from "axios";
import { CallbackFunction, Post } from "./type";

// export function saveImage() {

// }

export function writePostReq(url: string, data: Post, success: CallableFunction, error: CallbackFunction) {

    authReq("/post/create", () => {
        alert('post등록success');
    }, () => {
        alert('post등록error')
    }, data);

}
//auth-X, multer -> Path return
// export async function imgLoadReq(url: string, formData: FormData): Promise<any> {
//     return await (await axios.post(url, formData, { headers: { 'content-type': 'multipart/form-data' } })).data.url;
// }