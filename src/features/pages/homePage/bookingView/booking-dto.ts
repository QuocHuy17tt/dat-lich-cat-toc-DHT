

export interface bookingDetails {
    booking_details_id: number,
    service_id: number,
    price: string,
    description: string,
}
export type listBookingDetails = bookingDetails[]
export interface serviceDetails {
    service_id: number,
    name : string,
    image: string,
    price: string,
    status: number,
    description: string,
    category: {
        cate_id: number,
        name: string
    }
}

export type listServiceDetails = serviceDetails[]

export const timeForBooking = [
    800,830,900,930,1000,1030,1100,1130,1300,1330,1400,1430,1500,1530,1600,1630,1700,1730,1800,1830,1900,1930,2000,2030,
]

export const weekday = ["Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];

export const statusStyle = ["m-0 text-c-red","m-0 text-c-green", "m-0 text-c-purple","fas fa-circle text-c-red f-10","fas fa-circle text-c-green f-10","fas fa-circle text-c-purple f-10","Đã Hủy", "Đã Hoàn Thành", "Đang Chờ","Xác Nhận" ,"Đã Đến"]

export interface bookingInfo {
    booking_id: number,
    start_time: string,
    contact: string,
    phone: string,
    description: string,
    preview: string,
    status: number,
    bookingdetails: listBookingDetails,
}

export type listBookingInfo = bookingInfo[];

export interface bookingState {
    state: 'idle' | 'pending' | 'failed',
    listBookingInfo: listBookingInfo,
    msg: string,
}

export interface updateStatusBooking {
    booking_id: number,
    status: number 
}