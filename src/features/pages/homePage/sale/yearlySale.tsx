import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectBookingState } from "../bookingView/bookingSlice";

export const YearlySale: React.FC = () => {
    const booking = useAppSelector(selectBookingState);
    const reducer = (previousValue:any, currentValue:any) => previousValue + currentValue;
    const today = new Date(Date.now());
    const listYearPrice = booking.listBookingInfo.map(item => {
        let itemDate = new Date(item.start_time);
        if ((itemDate.getFullYear === today.getFullYear) && item.status === 1) {
            let price = item.bookingdetails.map(temp => temp.price!== null ? Number(temp.price) : 0);
            if(price.length !== 0){
                return price.reduce(reducer);
            } else 
                return price
        }else 
            return 0
    });
    const totalPrice = listYearPrice.length !== 0 ? listYearPrice.reduce(reducer) : 0;

    return (
        <div className="col-md-12 col-xl-4">
            <div className="card yearly-sales">
                <div className="card-block">
                    <h6 className="mb-4">Doanh thu năm</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>{totalPrice}</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">80%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" style={{height: 7}}>
                        <div className="progress-bar progress-c-theme w-75" role="progressbar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}