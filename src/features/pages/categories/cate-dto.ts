
export interface cateInfoResponse {
    cate_id: number, 
    name: string,
    image_cate: string,
    services: [],
    gallerys: [],
    voucher: []
}

export type listCateInfoResponse = cateInfoResponse[]

export interface cateState {
    state: 'idle' | 'failed' | 'pending',
    msg: string,
    categories: listCateInfoResponse

}