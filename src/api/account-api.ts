import axiosClient from "./axios-client";

export const accountApi = {
    getAccount: () => {
        let url = `users/`;
        return axiosClient.get(url);
    },
    createAccount: (params: any) => {
        let url = `users/${params.user_id}`;
        return axiosClient.put(url, params);
    },
    deleteAccount: (params: any) => {
        let url = `users/${params}`;
        return axiosClient.delete(url);
    },
    updateAccount: (id:number,params: any) => {
        let url = `users/${id}`;
        return axiosClient.put(url, params);
    }
}
