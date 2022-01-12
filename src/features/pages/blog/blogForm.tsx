import { Field, FieldHookConfig, Form, Formik, useField } from 'formik';
import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { blogInfoRequest, blogState } from "./blog-dto";
import { createNewBlog, selectBlogState, updateBlog } from "./blogSlice";
import { blogValidate } from "./blogValidate";

export type formFunc = {
    status: string;
}
export const BlogForm: React.FC<formFunc> = ({status}) => {
    let initialValues: blogInfoRequest = useAppSelector(selectBlogState).blog;
    const baseUrl = "http://localhost:8000";
    const [text, setText] = useState<string>(initialValues.content);
    const dispatch = useAppDispatch();
    const blogInfo:blogState = useAppSelector(selectBlogState);
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Add Blog</h5>
                    </div>
                    <div className="card-body">
                        <h5>Form controls</h5>
                        <hr/>                                                
                        <Formik
                            initialValues={initialValues}
                            validationSchema={blogValidate}
                            onSubmit={values => {
                                values.content = text;
                                console.log(values);
                                status === 'create' ? dispatch(createNewBlog(values)) : dispatch(updateBlog(values));
                                
                            }}
                            >
                            {({ errors, touched,values,setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <div className={status === 'create' ? "form-group" : "d-none"}>
                                                <label >Blog Id</label>
                                                <Field name="blog_id" className="form-control" placeholder="Enter blog id"/>                                                                            
                                            </div> */}
                                            <div className="form-group">
                                                <label>Blog Image</label>
                                                <input id="file" name="image_blogs" type= "file" className="form-control pb-1 pt-1"onChange={(event:any) => {
                                                    setFieldValue("image_blogs", event.currentTarget.files[0]);
                                                }}/>
                                            </div>
                                            <div className="form-group">
                                                <div className = "text-danger" >
                                                    {errors.name && touched.name ? (
                                                        <div>{errors.name}</div>
                                                    ) : null}
                                                </div>                                                                            
                                                <label >Blog Title</label>
                                                <Field name="name" className="form-control"   placeholder="Enter blog title"/>                    
                                            </div>                                                                                         
                                            <div className="form-group">
                                                <div className = "text-danger" >
                                                    {errors.description && touched.description ? (
                                                        <div>{errors.description}</div>
                                                    ) : null}
                                                </div>
                                                <label>Description</label>
                                                <Field name="description" className="form-control"  placeholder = "description..."/>
                                            </div>
                                            

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Content</label>
                                                <textarea 
                                                    className="form-control" 
                                                    value={text}
                                                    name="content" 
                                                    onChange={(e:any) => {
                                                        setText(e.target.value);
                                                        values.content = e.target.value;
                                                    }}
                                                    // id="exampleFormControlTextarea1" 
                                                    rows={10}></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center col-md-12">

                                            <button className="btn btn-primary" type="submit">
                                                <span>{blogInfo.state === 'pending' ? 
                                                <i className="fas fa-spinner fa-spin"></i> : <></>}</span>
                                            SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>                                            
                </div>
            </div>
        </div>
    )
}