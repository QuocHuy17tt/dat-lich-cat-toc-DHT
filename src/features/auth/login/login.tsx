import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { adminLoginValidate } from "./validate";
import { useAppDispatch } from "../../../app/hooks";
import { adminLogin } from "./loginSlice";

export const AdminLogin: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="auth-wrapper">
        <div className="auth-content">
            <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
            <div className="card">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={adminLoginValidate}
                    onSubmit={values => {
                        console.log(values);
                        dispatch(adminLogin(values));
                    }}
                >
                {({ errors, touched }) => (
                    <Form className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Đăng nhập</h3>
                        <div className = "col-sm-10 text-left text-danger" >
                            {errors.username && touched.username ? (
                                <div>{errors.username}</div>
                            ) : null}
                        </div>
                        <div className="input-group mb-4">
                            <Field name="username" className="form-control" placeholder = "Tên tài khooản"/>
                        </div>

                        <div className = "col-sm-10 text-left text-danger" >
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                        </div>
                        <div className="input-group mb-4">
                            <Field name="password" type= "password" className="form-control" placeholder = "Mật khẩu"/>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4" type="submit">
                            GỬI
                        </button>
                            <p className="mb-2 text-muted">Quên mất khẩu? <Link to="/reset">Lấy lại mật khẩu</Link></p>
                    </Form>
                )}
                </Formik>
                    
            </div>
        </div>
        
    </div>
    )
}