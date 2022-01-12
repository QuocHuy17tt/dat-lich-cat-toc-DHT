import axiosClient from "./axios-client";

export const cateApi = {
    getCate: () => {
        let url = `categories/`;
        return axiosClient.get(url);
    }
}
