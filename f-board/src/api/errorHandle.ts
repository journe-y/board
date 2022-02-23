import { AxiosError } from "axios";

export function handler({ response }:any) {
    if (isInternalServerError(response.status)) {
        alert('죄송합니다. 서버에서 잠시 에러가 발생했습니다. 잠시후 다시 시도해주세요.');
        return;
    }
    if (isBadRequest(response.status)) {
        return response.data.msg;
    }

    function isInternalServerError(status: number): boolean {
        return status >= 500;
    }

    function isBadRequest(status: number): boolean {
        return 400 <= status && status < 500;
        
    }
}