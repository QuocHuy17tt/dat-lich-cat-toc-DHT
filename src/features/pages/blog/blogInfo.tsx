
import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { blogInfoRequest, blogState } from "./blog-dto";
import { BlogForm } from "./blogForm";
import { deleteBlog, selectBlogState, setBlog } from "./blogSlice";

export type blogSearch = {
    search: string;
}

export const BlogInfoList: React.FC<blogSearch> = ({search}) => {
    const category: listCateInfoResponse = useAppSelector(selectCateState).categories;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const baseUrl = "http://localhost:8000"
    const dispatch = useAppDispatch();
    const blogInfo: blogState = useAppSelector(selectBlogState);

    const updateBlogState = (params: blogInfoRequest) => {
        setOpen(o => !o);
        dispatch(setBlog(params));
    }
    return (
        <div className="row">
            <div className="col-xl-12 col-md-12 m-b-30 Recent-Users" style={{ height: 600, overflowY: "auto" }}>
                <div className="tab-pane fade active show" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Blog Image</th>
                                <th>Blog Name</th>
                                <th>Description</th>
                                <th className="text-center">...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogInfo.listBlog.filter(val => {
                                    if(search === "") {
                                        return val;
                                    } else if(val.name.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                }).map(blog => {
                                    return (
                                        <tr key={blog.blog_id}>
                                            <td>
                                                <img className="rounded-circle m-r-10" style={{ width: 40 }} src={`${baseUrl}${blog.image_blogs}`} alt="activity-user" />
                                            </td>
                                            <td>
                                                <h6 className="m-0">{blog.name}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">
                                                    {blog.description === null ? "nothing" : blog.description}
                                                </h6>
                                            </td>
                                            <td className="text-center">
                                                    <button 
                                                        className="btn theme-bg pr-0 text-white f-12" 
                                                        style={{ fontSize: 12 }} 
                                                        onClick={() => 
                                                            updateBlogState(blog)
                                                        }
                                                    >
                                                        <i className="fas fa-pen"></i>
                                                    </button>
                                                <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width: 900}}>
                                                        <BlogForm status="update"/>
                                                    </div>
                                                </Popup>
                                                <button className="btn theme-bg2 pr-0 text-white f-12" style={{ fontSize: 12 }}
                                                    onClick={() => {
                                                        dispatch(deleteBlog(blog.blog_id));
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

