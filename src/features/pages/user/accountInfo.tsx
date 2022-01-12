
import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { accountInfoRequest, accountState } from "./account-dto";
import { AccountForm } from "./accountForm";
import { deleteAccount, selectAccountState, setAccount, setAccountPassword } from "./accountSlice";

export type accountSearch = {
    search: string;
}

export const AccountInfoList: React.FC<accountSearch> = ({search}) => {
    const category: listCateInfoResponse = useAppSelector(selectCateState).categories;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const baseUrl = "http://localhost:8000/"
    const dispatch = useAppDispatch();
    const accountInfo: accountState = useAppSelector(selectAccountState);

    const updateAccountState = (params: accountInfoRequest) => {
        setOpen(o => !o);
        dispatch(setAccount(params));
        dispatch(setAccountPassword());
    }
    return (
        <div className="row">
            <div className="col-xl-12 col-md-12 m-b-30 Recent-Users" style={{ height: 600, overflowY: "auto" }}>
                <div className="tab-pane fade active show" role="tabpanel" aria-labelledby="home-tab">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Full Name</th>
                                <th>Username</th>
                                <th>Phone number</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className="text-center">...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                accountInfo.listAccount.filter(val => {
                                    if(search === "") {
                                        return val;
                                    } else if(val.fullname.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                }).map(account => {
                                    return (
                                        <tr key={account.user_id}>
                                            <td>
                                                <img className="rounded-circle m-r-10" style={{ width: 40 }} src={`${baseUrl}${account.avatar}`} alt="activity-user" />
                                            </td>
                                            <td>
                                                <h6 className="m-0">{account.fullname}</h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">
                                                    {account.username}
                                                </h6>
                                            </td>
                                            <td>
                                                <h6 className="m-0">{account.phone}</h6>
                                            </td>
                                            <td>
                                                {account.address}
                                            </td>
                                            <td>
                                                {account.email}
                                            </td>
                                            <td>
                                                {account.role}
                                            </td>
                                            <td className="text-center">
                                                    <button 
                                                        className="btn theme-bg pr-0 text-white f-12" 
                                                        style={{ fontSize: 12 }} 
                                                        onClick={() => 
                                                            updateAccountState(account)
                                                        }
                                                    >
                                                        <i className="fas fa-pen"></i>
                                                    </button>
                                                <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width: 900}}>
                                                        <AccountForm status="update"/>
                                                    </div>
                                                </Popup>
                                                <button className="btn theme-bg2 pr-0 text-white f-12" style={{ fontSize: 12 }}
                                                    onClick={() => {
                                                        dispatch(deleteAccount(account.user_id));
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

