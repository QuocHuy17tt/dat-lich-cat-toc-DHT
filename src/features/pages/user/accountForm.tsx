import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { accountInfoRequest, accountState } from "./account-dto";
import { createNewAccount, selectAccountState, updateAccount } from "./accountSlice";
import { accountValidate } from "./accountValidate";

export type formFunc = {
    status: string;
}

export const AccountForm: React.FC<formFunc> = ({ status }) => {
    let initialValues: accountInfoRequest = useAppSelector(selectAccountState).account;
    const baseUrl = "http://localhost:8000"
    const dispatch = useAppDispatch();
    const accountInfo: accountState = useAppSelector(selectAccountState);
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Add Account</h5>
                    </div>
                    <div className="card-body">
                        <h5>Form controls</h5>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={accountValidate}
                            onSubmit={values => {
                                console.log(values);
                                status === 'create' ? dispatch(createNewAccount(values)) : dispatch(updateAccount(values));

                            }}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <div className={status === 'create' ? "d-none" : "form-group"}>
                                                <label >Account Id</label>
                                                <Field name="user_id" className="form-control" placeholder="Enter account id" />
                                            </div> */}
                                            <div className="form-group">
                                                <div className="text-danger" >
                                                    {errors.username && touched.username ? (
                                                        <div>{errors.username}</div>
                                                    ) : null}
                                                </div>

                                                <label >Username</label>
                                                <Field name="username" className="form-control" placeholder="Enter username" />

                                            </div>
                                            <div className="form-group">
                                                <label>New Password</label>
                                                <Field name="password" type="password" className="form-control" placeholder="password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="text-danger" >
                                                    {errors.email && touched.email ? (
                                                        <div>{errors.email}</div>
                                                    ) : null}
                                                </div>

                                                <label>Email address</label>
                                                <Field name="email" type="email" className="form-control" placeholder="Enter your email" />
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="text-danger" >
                                                    {errors.fullname && touched.fullname ? (
                                                        <div>{errors.fullname}</div>
                                                    ) : null}
                                                </div>

                                                <label>Fullname</label>
                                                <Field name="fullname" className="form-control" placeholder="full name" />
                                            </div>
                                            <div className="form-group">
                                                <div className="text-danger" >
                                                    {errors.address && touched.address ? (
                                                        <div>{errors.address}</div>
                                                    ) : null}
                                                </div>

                                                <label>Address</label>
                                                <Field name="address" className="form-control" placeholder="address" />
                                            </div>
                                            <div className="form-group">
                                                <div className="text-danger" >
                                                    {errors.phone && touched.phone ? (
                                                        <div>{errors.phone}</div>
                                                    ) : null}
                                                </div>

                                                <label>Phone number</label>
                                                <Field name="phone" className="form-control" placeholder="phone number" />
                                            </div>
                                            <Field as="select" className="form-control mb-4" name="role">
                                                <option value="">choose role...</option>
                                                <option value="1">Customer</option>
                                                <option value="2">Staff</option>
                                                <option value="3">Admin</option>
                                                <option value="4">Stylist</option>
                                            </Field>
                                            <button className="btn btn-primary" type="submit">
                                                <span>{accountInfo.state === 'pending' ?
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