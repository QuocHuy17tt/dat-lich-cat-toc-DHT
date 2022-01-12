import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { listBookingInfo, statusStyle, updateStatusBooking, weekday } from "./booking-dto";
import { selectBookingState, updateBookingStatus } from "./bookingSlice";

export const BookingYear: React.FC = () => {
    const monthPerYear = [1,2,3,4,5,6,7,8,9,10,11,12];
    const bookingDetails:listBookingInfo = useAppSelector(selectBookingState).listBookingInfo;
    const status = statusStyle;
    const today = new Date(Date.now());
    const dispatch = useAppDispatch();

    const setDataToUpdate = (bookingId: number, status: number) => {
        let dataReq:updateStatusBooking = {
            booking_id: bookingId,
            status: status
        }
        dispatch(updateBookingStatus(dataReq));
        window.location.reload();
    }

    return (
        <div className="col-xl-12 col-md-12 m-b-30">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            {
                monthPerYear.map((month, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <a className={index === 0 ? "nav-link active show" : "nav-link"} id="home-tab" data-toggle="tab" href={`#0${month}${today.getFullYear()}`} role="tab" aria-controls={`0${month}${today.getFullYear()}`} aria-selected="false">
                                {month}/{new Date(Date.now()).getFullYear()}
                            </a>
                        </li>
                    )    
                })
            }
            </ul>
            <div className="tab-content" id="myTabContent" style={{overflowY: "auto", height: 420}}>
                {
                    monthPerYear.map((item, index) => {
                        return(
                        <div key={index} className={index === 0 ? "tab-pane fade active show" : "tab-pane fade" }id={`0${item}${today.getFullYear()}`} role="tabpanel" aria-labelledby="home-tab">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Phone Number</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Service</th>
                                        <th>Price</th>
                                        <th>Preview</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        bookingDetails.map((booking) => {

                                            let time = new Date(booking.start_time);
                                            // set current time to compare with time in array to render 
                                            let renderDate = today.getMonth() + index;
                                            if(time.getMonth() === renderDate) {
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
                                                        <h6 className="m-0">
                                                            {time.toLocaleDateString()}
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
                                                        <h6>{booking.preview}</h6>
                                                    </td>
                                                    <td>
                                                        {booking.status === 2 ?
                                                        <>
                                                            <button className="btn label theme-bg2 text-white f-12"
                                                            onClick={()=> {
                                                              setDataToUpdate(booking.booking_id, 0)
                                                            }}>
                                                                Reject
                                                            </button>

                                                            <button className="btn label theme-bg text-white f-12" onClick={()=> {
                                                              setDataToUpdate(booking.booking_id, 1)
                                                            }}>
                                                                Approve
                                                            </button>
                                                         </> : <h6 className={status[booking.status]}>{status[booking.status + 6]}</h6>
                                                         }
                                                        
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