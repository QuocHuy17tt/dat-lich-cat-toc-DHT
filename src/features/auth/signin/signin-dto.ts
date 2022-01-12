export type registerInfo = {
    username: string,
    fullname: string,
    email: string,
    phone: string,
    address: string,
    image?: any,
    avatar?: any,
    role: string,
    password: string,
}
export type registerState = {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
}

export const registerInit: registerInfo = {
    username: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    password: "",
}