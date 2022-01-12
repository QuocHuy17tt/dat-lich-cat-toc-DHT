export interface category {
    cate_id: number,
    name: string,
}

export interface galleryInfoRequest {
    gallery_id: number,
    name: string,
    image?: any,
    description: string,
    cate_id: string
}

export interface galleryInfoResponse extends galleryInfoRequest {
    category: category
}

export type listGalleryInfoResponse = galleryInfoResponse[];

export interface galleryState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listGallery: listGalleryInfoResponse,
    gallery: galleryInfoRequest,
}