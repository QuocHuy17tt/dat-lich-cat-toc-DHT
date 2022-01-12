import React from "react";
import { useAppSelector } from "../../../../app/hooks";
import { listBookingInfo, statusStyle, weekday } from "./booking-dto";
import { selectBookingState } from "./bookingSlice";

export const BookingWeek: React.FC = () => {
    const weekTime = weekday;
    const bookingDetails:listBookingInfo = useAppSelector(selectBookingState).listBookingInfo;
    const status = statusStyle;
    const today = new Date(Date.now());
    return (
        <div className="col-xl-8 col-md-12 m-b-30">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {weekTime.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <a className={index === 0 ? "nav-link active show" : "nav-link"} id="home-tab" data-toggle="tab" href={`#${today.getDate()+index}`} role="tab" aria-controls={`${today.getDate()+index}`} aria-selected="false">
                                {`${weekday[(today.getDay()+index)%7]} (${today.getDate()+index}/${today.getMonth()+1})`}
                            </a>
                        </li>
                    )    
                })}
            </ul>
            <div className="tab-content" id="myTabContent" style={{overflowY: "auto", height: 420}}>
                {
                    weekTime.map((item, index) => {
                        return(
                        <div key={index} className={index === 0 ? "tab-pane fade active show" : "tab-pane fade" }id={`${today.getDate()+index}`} role="tabpanel" aria-labelledby="home-tab">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Tên khách</th>
                                        <th>Số điện thoại</th>
                                        <th>Time</th>
                                        <th>Dịch vụ</th>
                                        <th>Tổng tiền</th>
                                        <th>Trạng thái</th>
                                        <th className="text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        bookingDetails.map((booking) => {

                                            let time = new Date(booking.start_time);
                                            // set current time to compare with time in array to render 
                                            let renderDate = today.getDate() + index;
                                            if(time.getDate() === renderDate) {
                                            return (
                                                <tr key={booking.booking_id}>
                                                    <td>
                                                        <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src={`assets/images/user/avatar-${Math.floor(Math.random()*5)+1}.jpg`} alt="activity-user" />{booking.contact}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">
                                                            {booking.phone}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">
                                                            {time.toLocaleTimeString()}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        {booking.bookingdetails.map((serviceName, id) => {
                                                            return (
                                                                <h6 key={id} className="m-0">
                                                                    {serviceName.description}
                                                                </h6>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                        {booking.bookingdetails.map((servicePrice,idx) => { 
                                                            return (
                                                                <h6 key={idx} className="m-0">
                                                                    {Number(servicePrice.price)/1000}K
                                                                </h6>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                        <h6 className={status[booking.status]}>{status[booking.status + 6]}</h6>
                                                    </td>
                                                    <td className="text-right">
                                                        <i className={status[booking.status + 3]}></i>
                                                    </td>
                                                </tr>
                                            )}
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}