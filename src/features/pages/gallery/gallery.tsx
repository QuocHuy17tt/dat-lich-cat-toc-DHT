import React, { useState } from "react";
import { Popup } from 'reactjs-popup';
import { useAppDispatch } from "../../../app/hooks";
import { Header } from "../../pages/header/header";
import { galleryInfoRequest } from "./gallery-dto";
import { GalleryForm } from "./galleryForm";
import { GalleryInfoList } from "./galleryInfo";
import { setGallery } from "./gallerySlice";

export const Gallery: React.FC = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const initialValues: galleryInfoRequest = {
        gallery_id: 0,
        name: '',
        description: '',
        image: '',
        cate_id: '',
    }
    const updateGalleryState = (params: galleryInfoRequest) => {
        console.log(params);
        console.log(open);
        dispatch(setGallery(params));
        setOpen(o => !o);
    }
    return (
        <>
        <Header tab = "gallery" />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Manage Gallery</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input 
                                                type="text"
                                                className="form-control mx-3 mt-2"   
                                                placeholder="Gallery name..." 
                                                onChange={(e) => setSearch(e.target.value)}/>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <button className="btn theme-bg font-weight-bold text-dark mt-2 nav-item mr-3" 
                                                onClick={() => {
                                                    updateGalleryState(initialValues);
                                                }}>Add new</button>
                                            <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width:900}}>
                                                        <GalleryForm status="create"/>
                                                    </div>
                                            </Popup>
                                        </div>
                                   </div>
                                </div> 
                                <div className="card">
                                   <GalleryInfoList search={search}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}