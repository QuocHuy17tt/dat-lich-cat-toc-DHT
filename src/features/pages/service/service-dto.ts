export interface category {
    cate_id: number,
    name: string,
}

export interface serviceInfoRequest {
    service_id: number,
    name: string,
    image?: any,
    price: string,
    description: string,
    cate_id: string
}

export interface serviceInfoResponse extends serviceInfoRequest {
    category: category
}

export type listServiceInfoResponse = serviceInfoResponse[];

export interface serviceState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listService: listServiceInfoResponse,
    service: serviceInfoRequest,
}