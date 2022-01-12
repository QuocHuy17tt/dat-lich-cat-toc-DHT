import React from "react";

export const SocialLike:React.FC = () => {
    return (
        <>
        <div className="col-md-12 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-facebook-f text-primary f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>12,281</h3>
                            <h5 className="text-c-green mb-0">+7.2% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>35,098</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme w-75" role="progressbar" style={{height:6,}}></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>3,539</h6>
                            <div className="progress">
                            <div className="progress-bar progress-c-theme2" role="progressbar" style={{width:130, height:6,}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-twitter text-c-blue f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>11,200</h3>
                            <h5 className="text-c-purple mb-0">+6.2% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>34,185</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-green w-25" role="progressbar" style={{height:6,}}></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>4,567</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-blue w-75" role="progressbar" style={{height:6,}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className="fab fa-google-plus-g text-c-red f-36"></i>
                        </div>
                        <div className="col text-right">
                            <h3>10,500</h3>
                            <h5 className="text-c-blue mb-0">+5.9% <span className="text-muted">Total Likes</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>25,998</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{height:6, width:150}}></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>7,753</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme2 w-50" role="progressbar" style={{height:6,}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>       
    )
}