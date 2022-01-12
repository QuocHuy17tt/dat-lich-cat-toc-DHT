import React from "react";
import { Link } from 'react-router-dom';


export const ForgotPassword: React.FC = () => {
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
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-mail auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Lấy lại mật khẩu</h3>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <button className="btn btn-primary mb-4 shadow-2">Lấy lại mật khẩu</button>
                        <p className="mb-0 text-muted"><Link to="/">Đăng nhập</Link></p>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}