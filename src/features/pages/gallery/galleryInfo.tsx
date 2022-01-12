
import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { galleryInfoRequest, galleryState } from "./gallery-dto";
import { GalleryForm } from "./galleryForm";
import { deleteGallery, selectGalleryState, setGallery } from "./gallerySlice";

export type gallerySearch = {
    search: string;
}

export const GalleryInfoList: React.FC<gallerySearch> = ({search}) => {
    const category: listCateInfoResponse = useAppSelector(selectCateState).categories;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const baseUrl = "http://localhost:8000"
    const dispatch = useAppDispatch();
    const galleryInfo: galleryState = useAppSelector(selectGalleryState);

    const updateGalleryState = (params: galleryInfoRequest) => {
        setOpen(o => !o);
        dispatch(setGallery(params));
    }
    return (
        <div className="row">
            <div className="col-xl-12 col-md-12 m-b-30 Recent-Users" style={{ height: 600, overflowY: "auto" }}>
                <div className="tab-pane fade active show" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Gallery Name</th>
                                <th>Description</th>
                                <th>Categories</th>
                                <th className="text-center">...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                galleryInfo.listGallery.filter(val => {
                                    if(search === "") {
                                        return val;
                                    } else if(val.name.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                }).map(gallery => {
                                    return (
                                        <tr key={gallery.gallery_id}>
                                            <td>
                                                <img className="rounded-circle m-r-10" style={{ width: 40 }} src={`${baseUrl}${gallery.image}`} alt="activity-user" />
                                            </td>
                                            <td>
                                                <h6 className="m-0">{gallery.name}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">
                                                    {gallery.description === null ? "nothing" : gallery.description}
                                                </h6>
                                            </td>
                                            <td>
                                                {gallery.category.name} 
                                            </td>
                                            <td className="text-center">
                                                    <button 
                                                        className="btn theme-bg pr-0 text-white f-12" 
                                                        style={{ fontSize: 12 }} 
                                                        onClick={() => 
                                                            updateGalleryState(gallery)
                                                        }
                                                    >
                                                        <i className="fas fa-pen"></i>
                                                    </button>
                                                <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width: 900}}>
                                                        <GalleryForm status="update"/>
                                                    </div>
                                                </Popup>
                                                <button className="btn theme-bg2 pr-0 text-white f-12" style={{ fontSize: 12 }}
                                                    onClick={() => {
                                                        dispatch(deleteGallery(gallery.gallery_id));
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

