export type CallbackFunction = (data?: any) => void | string;
export type User = {
    userid: string;
    userpw: string;
}

export type Post = {
    contents:string;
    title:string;
    category:string;
}
