
export interface loginInfo {
    username: string,
    password: string
}

export interface loginState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    token: string,
    Account: string,
}