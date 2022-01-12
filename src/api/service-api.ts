import { serviceInfoRequest } from "../features/pages/service/service-dto";
import axiosClient from "./axios-client";

export const serviceApi = {
    getService: () => {
        let url = `service/`;
        return axiosClient.get(url);
    },
    createService: (params: any) => {
        let url = `service/create`;
        return axiosClient.post(url, params);
    },
    deleteService: (params: any) => {
        let url = `service/delete/${params}`;
        return axiosClient.delete(url);
    },
    updateService: (id:number,params: any) => {
        let url = `service/update/${id}`;
        return axiosClient.put(url, params);
    }
}
