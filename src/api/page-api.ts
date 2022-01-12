import { loginInfo } from "../features/auth/login/login-dto";
import axiosClient from "./axios-client";



export const pageApi = {
    getCate: () => {
        let url = `categories/`;
        return axiosClient.get(url);
    }
}
