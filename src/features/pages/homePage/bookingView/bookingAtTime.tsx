import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { listBookingInfo, statusStyle, timeForBooking, updateStatusBooking } from "./booking-dto";
import { ExecuteTotalPrice, getBooking, selectBookingState, updateBookingStatus } from "./bookingSlice";

export const BookingAtTime:React.FC = () => {
    const bookingDetails:listBookingInfo = useAppSelector(selectBookingState).listBookingInfo;
    const timeBooking = timeForBooking;
    const status = statusStyle;
    const dispatch = useAppDispatch();
    let date = new Date(Date.now());

    const setDataToUpdate = (bookingId: number, status: number) => {
        let dataReq:updateStatusBooking = {
            booking_id: bookingId,
            status: status
        }
        dispatch(updateBookingStatus(dataReq));
        window.location.reload();
    }

    useEffect(() => {
        dispatch(getBooking());
    }, [])

    return (
        <div className="col-xl-12 col-md-12 m-b-30 Recent-Users">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    timeBooking.map((item, index) => {
                        let time = JSON.stringify(item).split("");
                        // let now = new Date(Date.now()).getHours();
                        time.splice(-2,0, ":");
                        return (
                            <li key={item} className="nav-item">
                                <a className={item/100 === date.getHours() ? "nav-link active show" : "nav-link"} id="home-tab" data-toggle="tab" href={`#${item}`} role="tab" aria-controls= {`${item}`} 
                                aria-selected= {item/100 === date.getHours() ? "true" : "false"}>
                                    {time.join("")}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="tab-content" id="myTabContent" style={{overflowY: "auto", height: 450}}>
            {
                timeBooking.map((item,index) => {
                    return (
                        <div key={index} className={item/100 === date.getHours() ? "tab-pane fade active show" : "tab-pane fade"} id={`${item}`} role="tabpanel" aria-labelledby="home-tab">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Tên khách</th>
                                        <th>Lưu ý</th>
                                        <th>Số điện thoại</th>
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
                                            let currTime = time.getHours()*100 + time.getMinutes();
                                            if((date.toLocaleDateString() === time.toLocaleDateString()) && (item === currTime)) {
                                            return (
                                                <tr key={booking.booking_id}>
                                                    <td>
                                                        <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:40}} src={`assets/images/user/avatar-${Math.floor(Math.random()*5)+1}.jpg`} alt="activity-user" />{booking.contact}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">
                                                            {booking.description === ""? "nothing" : booking.description}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">{booking.phone}</h6>
                                                    </td>
                                                    <td>
                                                        {booking.bookingdetails.map((serviceName,id) => {
                                                            return (
                                                                <h6 key={id} className="m-0">
                                                                    {serviceName.description}
                                                                </h6>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                        <h6 className="m-0">
                                                            {ExecuteTotalPrice(booking.bookingdetails)/1000}K
                                                        </h6>
                                                    </td>
                                                    
                                                    <td>
                                                        {booking.status === 2 ?
                                                        <>
                                                            <button className="btn label theme-bg2 text-white f-12"
                                                            onClick={()=> {
                                                              setDataToUpdate(booking.booking_id, 0)
                                                            }}>
                                                                Hủy lịch
                                                            </button>
                                                            <button className="btn label theme-bg2 text-white f-12"
                                                            onClick={()=> {
                                                              setDataToUpdate(booking.booking_id, 3)
                                                            }}>
                                                                Khách xác nhận
                                                            </button>
                                                            <button className="btn label theme-bg2 text-white f-12"
                                                            onClick={()=> {
                                                              setDataToUpdate(booking.booking_id, 4)
                                                            }}>
                                                                Khách đã đến
                                                            </button>
                                                            <button className="btn label theme-bg text-white f-12" onClick={()=> {
                                                              setDataToUpdate(booking.booking_id, 1)
                                                            }}>
                                                                Xác nhận
                                                            </button>
                                                         </> : <h6 className={status[booking.status]}>{status[booking.status + 6]}</h6>
                                                         }
                                                        
                                                    </td>
                                                    <td className="text-right"></td>
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
