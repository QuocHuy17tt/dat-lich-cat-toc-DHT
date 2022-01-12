import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { AdminLogin } from "../../auth/login/login";
import { selectLoginState } from '../../auth/login/loginSlice';
import { Header } from "../header/header";
import { BookingAtTime } from "./bookingView/bookingAtTime";
import { BookingWeek } from "./bookingView/bookingWeek";
import { BookingYear } from "./bookingView/bookingYear";
import { RatingList } from "./chart/rating";
import { YearChart } from "./chart/yearChart";
import { DailySale } from "./sale/dailySale";
import { MonthlySale } from "./sale/monthlySale";
import { YearlySale } from "./sale/yearlySale";

export const Home:React.FC = () => {
    return (
        <>"
        <Header tab= "home"/>
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="row">
                                    <DailySale />
                                    <MonthlySale />
                                    <YearlySale />
                                    <BookingAtTime />
                                    <RatingList />
                                    <BookingWeek />
                                    <BookingYear />
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

type state = {
    token: string,
}

export const SetLayout:React.FC<state> = ({token}) => {
    console.log(token);
    if(sessionStorage.getItem("token") !== null) {
        return (
            <Home />
        )
    } else {
        return <AdminLogin />
    }
}

export const Layout: React.FC = () => {
    let loginState = useAppSelector(selectLoginState);
    let token = JSON.stringify(sessionStorage.getItem('token'));
    
    return(
        <SetLayout token={token} />
    )
    
}