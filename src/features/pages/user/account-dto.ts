export interface category {
    cate_id: number,
    name: string,
}

export interface accountInfoRequest {
    user_id: number,
    username: string,
    fullname: string,
    email: string,
    phone: string,
    address: string,
    avatar: string,
    role: string,
    password: string,
}

export interface accountInfoResponse extends accountInfoRequest {
}

export type listAccountInfoResponse = accountInfoResponse[];

export interface accountState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listAccount: listAccountInfoResponse,
    account: accountInfoRequest,
}