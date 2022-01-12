import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Header } from "../../pages/header/header"
import { Formik, Form, Field } from 'formik';
import { registerInfo, registerInit, registerState } from "./signin-dto";
import { registerValidate } from "./signinValidate";
import { registerFunction, selectRegisterState } from "./signinSlice";

export const SigninUser: React.FC = () => {
    const initialValues: registerInfo = registerInit;
    const registerState: registerState = useAppSelector(selectRegisterState);
    const dispatch = useAppDispatch();
    return (
        <>
        <Header tab = "signin" />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Register</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>Form controls</h5>
                                                <hr/>
                                                
                                                <Formik
                                                    initialValues={initialValues}
                                                    validationSchema={registerValidate}
                                                    onSubmit={values => {
                                                        console.log(values);
                                                        dispatch(registerFunction(values));
                                                    }}
                                                    >
                                                    {({ errors, touched, setFieldValue }) => (
                                                        <Form encType="multipart/form-data">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.username && touched.username ? (
                                                                                <div>{errors.username}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label >Username</label>
                                                                        <Field name="username" className="form-control"   placeholder="Enter username"/>
                                                                            
                                                                    </div>
                                                                            
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.password && touched.password ? (
                                                                                <div>{errors.password}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label>Password</label>
                                                                        <Field name="password" type= "password" className="form-control"  placeholder = "password"/>
                                                                    </div>
                                                                            
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.email && touched.email ? (
                                                                                <div>{errors.email}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label>Email address</label>
                                                                        <Field name="email" type= "email"className="form-control"  placeholder = "Enter your email"/>
                                                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.phone && touched.phone ? (
                                                                                <div>{errors.phone}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label>Phone number</label>
                                                                        <Field name="phone" className="form-control"  placeholder = "phone number"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.fullname && touched.fullname ? (
                                                                                <div>{errors.fullname}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label>Fullname</label>
                                                                        <Field name="fullname" className="form-control"  placeholder = "full name"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.address && touched.address ? (
                                                                                <div>{errors.address}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label>Address</label>
                                                                        <Field name="address" className="form-control"  placeholder = "address"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label>Avatar</label>
                                                                        <input id="file" name="image" type= "file" className="form-control pb-1 pt-1"onChange={(event:any) => {
                                                    setFieldValue("image", event.currentTarget.files[0]);
                                                }}/>
                                                                    </div>

                                                                    <Field as="select" className="form-control mb-4"   name="role">
                                                                        <option value="">choose role...</option>
                                                                        <option value="1">Customer</option>
                                                                        <option value="2">Staff</option>
                                                                        <option value="3">Admin</option>
                                                                        <option value="4">Stylist</option>
                                                                    </Field>
                                                                            
                                                                    <button className="btn  btn-primary" type="submit">
                                                                        <span>{registerState.state === 'pending' ? 
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}