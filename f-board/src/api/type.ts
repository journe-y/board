export type CallbackFunction = (data?: any) => void | string;
export type User = {
    userid: string;
    userpw: string;
}

export type PostDetail = {
    category: string,
    contents?: string,
    date: string,
    id?: number,
    imgpath?: string,
    title: string,
    userid: string
}

export type Post = {
    contents: string;
    title: string;
    category: string;
}