import { loginInfo } from "../features/auth/login/login-dto";
import { registerInfo } from "../features/auth/signin/signin-dto";
import axiosClient from "./axios-client";



export const authApi = {
    login: (params:loginInfo) => {
        let url = `users/login`;
        return axiosClient.post(url, params);
    },
    register: (params:any) => {
        let url = `users/register`;
        return axiosClient.post(url, params);
    },
    sendImg:(params: any) => {
        let url = `users/image`;
        return axiosClient.post(url, params);
    }
}
