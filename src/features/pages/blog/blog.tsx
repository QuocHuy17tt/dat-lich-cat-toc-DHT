import React, { useState } from "react";
import { Popup } from 'reactjs-popup';
import { useAppDispatch } from "../../../app/hooks";
import { Header } from "../../pages/header/header";
import { blogInfoRequest } from "./blog-dto";
import { BlogForm } from "./blogForm";
import { BlogInfoList } from "./blogInfo";
import { setBlog } from "./blogSlice";

export const Blog: React.FC = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const initialValues: blogInfoRequest = {
        blog_id: 0,
        name: '',
        description: '',
        image_blogs: '',
        content: '',
        comments: [],
    }
    const updateBlogState = (params: blogInfoRequest) => {
        console.log(params);
        console.log(open);
        dispatch(setBlog(params));
        setOpen(o => !o);
    }
    return (
        <>
        <Header tab = "blog" />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Manage Blog</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input 
                                                type="text"
                                                className="form-control mx-3 mt-2"   
                                                placeholder="Blog name..." 
                                                onChange={(e) => setSearch(e.target.value)}/>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <button className="btn theme-bg font-weight-bold text-dark mt-2 nav-item mr-3" 
                                                onClick={() => {
                                                    updateBlogState(initialValues);
                                                }}>Add new</button>
                                            <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width:900}}>
                                                        <BlogForm status="create"/>
                                                    </div>
                                            </Popup>
                                        </div>
                                   </div>
                                </div> 
                                <div className="card">
                                   <BlogInfoList search={search}/>
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