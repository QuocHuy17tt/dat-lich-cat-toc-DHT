import { blogInfoRequest } from "../features/pages/blog/blog-dto";
import axiosClient from "./axios-client";

export const blogApi = {
    getBlog: () => {
        let url = `blogs/`;
        return axiosClient.get(url);
    },
    createBlog: (params: any) => {
        let url = `blogs/create`;
        return axiosClient.post(url, params);
    },
    deleteBlog: (params: any) => {
        let url = `blogs/delete/${params}`;
        return axiosClient.delete(url);
    },
    updateBlog: (id:number,params: any) => {
        let url = `blogs/update/${id}`;
        return axiosClient.put(url, params);
    }
}
