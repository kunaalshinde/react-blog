export type LoginType = {
    isLogged?: boolean,
    isRegistered?: boolean
}

export type BlogType = {
    _id: any,
    username: string,
    title: string,
    body: string,
    imageURL: string,
    published?: boolean
}

export type BlogAction = {
    type: string,
    blogs: BlogType[],
}

export type InitBlog = {
    id: string,
    blogs: BlogType[],
}