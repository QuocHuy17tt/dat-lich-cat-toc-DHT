import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import { useAppDispatch } from "../../../app/hooks";
import { Header } from "../header/header";
import { accountInfoRequest } from '../user/account-dto';
import { AccountForm } from './accountForm';
import { AccountInfoList } from './accountInfo';
import { setAccount } from './accountSlice';

export const Account: React.FC = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const initialValues: accountInfoRequest = {
        user_id: 0,
        username: '',
        fullname: '',
        password: '',
        phone: '',
        role:'',
        avatar: '',
        email: '',
        address: '',

    }
    const updateAccountState = (params: accountInfoRequest) => {
        console.log(params);
        console.log(open);
        dispatch(setAccount(params));
        setOpen(o => !o);
    }

    return (
        <>
        <Header tab = "account" />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Manage Account</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input 
                                                type="text"
                                                className="form-control mx-3 mt-2"   
                                                placeholder="Account name..." 
                                                onChange={(e) => setSearch(e.target.value)}/>
                                        </div>
                                        {/* <div className="col-sm-6 text-right">
                                            <button className="btn theme-bg font-weight-bold text-dark mt-2 nav-item mr-3" 
                                                onClick={() => {
                                                    updateAccountState(initialValues);
                                                }}>Add new</button>
                                            <Popup open={open}>
                                                    <button className="close" onClick={closeModal}>
                                                        &times;
                                                    </button>
                                                    <div style={{width:900}}>
                                                        <AccountForm status="create"/>
                                                    </div>
                                            </Popup>
                                        </div> */}
                                   </div>
                                </div> 
                                <div className="card">
                                   <AccountInfoList search={search}/>
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