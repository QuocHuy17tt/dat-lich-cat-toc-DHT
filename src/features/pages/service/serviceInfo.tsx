
import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { serviceInfoRequest, serviceState } from "./service-dto";
import { ServiceForm } from "./serviceForm";
import { deleteService, selectServiceState, setService } from "./serviceSlice";

export type serviceSearch = {
    search: string;
}

export const ServiceInfoList: React.FC<serviceSearch> = ({search}) => {
    const category: listCateInfoResponse = useAppSelector(selectCateState).categories;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const baseUrl = "http://localhost:8000"
    const dispatch = useAppDispatch();
    const serviceInfo: serviceState = useAppSelector(selectServiceState);

    const updateServiceState = (params: serviceInfoRequest) => {
        setOpen(o => !o);
        dispatch(setService(params));
    }
    return (
        <div className="row">
            <div className="col-xl-12 col-md-12 m-b-30 Recent-Users" style={{ height: 600, overflowY: "auto" }}>
                <div className="tab-pane fade active show" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Categories</th>
                                <th className="text-center">...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceInfo.listService.filter(val => {
                                    if(search === "") {
                                        return val;
                                    } else if(val.name.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                }).map(service => {
                                    return (
                                        <tr key={service.service_id}>
                                            <td>
                                                <img className="rounded-circle m-r-10" style={{ width: 40 }} src={`${baseUrl}${service.image}`} alt="activity-user" />
                                            </td>
                                            <td>
                                                <h6 className="m-0">{service.name}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">
                                                    {service.description === "" ? "nothing" : service.description}
                                                </h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">{service.price}</h6>
                                            </td>
                                            <td>
                                                {service.category.name}
                                            </td>
                                            <td className="text-center">
                                                    <button 
                                                        className="btn theme-bg pr-0 text-white f-12" 
                                                        style={{ fontSize: 12 }} 
                                                        onClick={() => 
                                                            updateServiceState(service)
                                                        }
                                                    >
                                                        <i className="fas fa-pen"></i>
                                                    </button>
                                                <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width: 900}}>
                                                        <ServiceForm status="update"/>
                                                    </div>
                                                </Popup>
                                                <button className="btn theme-bg2 pr-0 text-white f-12" style={{ fontSize: 12 }}
                                                    onClick={() => {
                                                        dispatch(deleteService(service.service_id));
                                                    }}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

