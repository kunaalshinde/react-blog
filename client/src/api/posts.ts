import axios, { AxiosResponse } from "axios";

export const fetchBlogs = (search: any) => axios.get(`/blogs/${search}`);

export const fetchBlogbyId = (id: any) => axios.get(`/blogs/${id}`);

