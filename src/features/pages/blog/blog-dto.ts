export interface category {
    cate_id: number,
    name: string,
}

export interface blogInfoRequest {
    blog_id: number,
    name: string,
    image_blogs?: any,
    description: string,
    content: string,
    comments: []
}

export interface blogInfoResponse extends blogInfoRequest {
    category: category
}

export type listBlogInfoResponse = blogInfoResponse[];

export interface blogState {
    state: 'idle' | 'pending' | 'failed',
    msg: string,
    listBlog: listBlogInfoResponse,
    blog: blogInfoRequest,
}