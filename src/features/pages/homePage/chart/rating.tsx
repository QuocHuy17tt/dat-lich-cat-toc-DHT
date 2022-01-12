import React from "react";

export const RatingList:React.FC = () => {
    return (
        <div className="col-xl-4 col-md-6">
                                    <div className="card user-list">
                                        <div className="card-header">
                                            <h5>Đánh giá</h5>
                                        </div>
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center m-b-20">
                                                <div className="col-6">
                                                    <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fas fa-star f-10 m-l-10 text-c-yellow"></i></h2>
                                                </div>
                                                <div className="col-6">
                                                    <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i></h6>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>5</h6>
                                                    <h6 className="align-items-center float-right">384</h6>
                                                    <div className="progress m-t-30 m-b-20" style={{height:6}}>
                                                        <div className="progress-bar progress-c-theme w-75" role="progressbar" ></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>4</h6>
                                                    <h6 className="align-items-center float-right">145</h6>
                                                    <div className="progress m-t-30  m-b-20" style={{height:6}}>
                                                        <div className="progress-bar progress-c-theme w-25" role="progressbar" ></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>3</h6>
                                                    <h6 className="align-items-center float-right">24</h6>
                                                    <div className="progress m-t-30  m-b-20 " style={{height:6}}>
                                                        <div className="progress-bar progress-c-theme w-15" style={{ width:60}} role="progressbar" ></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>2</h6>
                                                    <h6 className="align-items-center float-right">1</h6>
                                                    <div className="progress m-t-30  m-b-20" style={{height:6}}>
                                                        <div className="progress-bar progress-c-theme" role="progressbar"  style={{ width:20}} ></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>1</h6>
                                                    <h6 className="align-items-center float-right">0</h6>
                                                    <div className="progress m-t-30  m-b-20" style={{height:6}}>
                                                        <div className="progress-bar" role="progressbar"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    )
}