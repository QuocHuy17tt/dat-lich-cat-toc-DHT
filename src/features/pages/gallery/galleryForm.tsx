import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { galleryInfoRequest, galleryState } from "./gallery-dto";
import { createNewGallery, selectGalleryState, updateGallery } from "./gallerySlice";
import { galleryValidate } from "./galleryValidate";

export type formFunc = {
    status: string;
}

export const GalleryForm: React.FC<formFunc> = ({status}) => {
    let initialValues: galleryInfoRequest = useAppSelector(selectGalleryState).gallery;
    const category: listCateInfoResponse = useAppSelector(selectCateState).categories;
    const baseUrl = "http://localhost:8000"
    const dispatch = useAppDispatch();
    const galleryInfo:galleryState = useAppSelector(selectGalleryState);
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Add Gallery</h5>
                    </div>
                    <div className="card-body">
                        <h5>Form controls</h5>
                        <hr/>                                                
                        <Formik
                            initialValues={initialValues}
                            validationSchema={galleryValidate}
                            onSubmit={values => {
                                console.log(values);
                                status === 'create' ? dispatch(createNewGallery(values)) : dispatch(updateGallery(values));
                                
                            }}
                            >
                            {({ errors, touched,values,setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <div className={status === 'create' ? "form-group" : "d-none"}>
                                                <label >Gallery Id</label>
                                                <Field name="gallery_id" className="form-control" placeholder="Enter gallery id"/>                                                                            
                                            </div> */}
                                            <div className="form-group">
                                                <div className = "text-danger" >
                                                    {errors.name && touched.name ? (
                                                        <div>{errors.name}</div>
                                                    ) : null}
                                                </div>                                                                            
                                                <label >Gallery Name</label>
                                                <Field name="name" className="form-control"   placeholder="Enter gallery name"/>                                                                            
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

                                            <div className="form-group">
                                                <label>Avatar</label>
                                                <input id="file" name="image" type= "file" className="form-control pb-1 pt-1"onChange={(event:any) => {
                                                    setFieldValue("image", event.currentTarget.files[0]);
                                                }}/>
                                            </div>
                                            <Field as="select" className="form-control mb-4"   name="cate_id">
                                                <option value="">choose categories...</option>
                                                {
                                                    category.map(item => {
                                                        return (
                                                            <option 
                                                            key={item.cate_id}
                                                            value={item.cate_id}>
                                                                {item.name}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </Field>

                                        </div>
                                        <div className="col-md-2">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group pb-3">
                                                <h6 className="font-weight-bold ">
                                                    Id:
                                                </h6>
                                            </div>
                                            <div className="form-group pb-3">
                                                <h6 className="font-weight-bold ">
                                                    Name:
                                                </h6>
                                            </div>
                                            <div className="form-group pb-3">
                                                <h6 className="font-weight-bold ">
                                                    Description:
                                                </h6>
                                            </div>
                                            <div className="form-group pb-3">
                                                <h6 className="font-weight-bold ">
                                                    Categories:
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group pb-3">
                                                <h6 className="">
                                                    {values.gallery_id}
                                                </h6>
                                            </div>
                                            <div className="form-group pb-3">
                                                <h6 className="">
                                                    {values.name}
                                                </h6>
                                            </div>
                                            <div className="form-group pb-3">
                                                <h6 className="">
                                                    {values.description}
                                                </h6>
                                            </div>
                                            <div className="form-group pb-3">
                                                <h6 className="">
                                                    {values.cate_id}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="text-center col-md-12">

                                            <button className="btn btn-primary" type="submit">
                                                <span>{galleryInfo.state === 'pending' ? 
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