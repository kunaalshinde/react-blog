import axios, { AxiosResponse } from "axios";

export const fetchBlogs = (search: any) => axios.get(`/blogs/${search}`);

export const fetchBlogbyId = (id: any) => axios.get(`/blogs/${id}`);

export const createBlog = (blog :any) => axios.post("/blogs", blog);

export const deleteBlog = (id: any, username: string) => axios.delete(`/blogs/${id}`,{
                                                            data: {username: username}
                                                        });

export const updateBlog = (id: any, 
                            username: string, 
                            title: string, 
                            body: string, 
                            published: string) => axios.put(`/blogs/${id}`,                              { username, 
                                                             title, 
                                                             body, 
                                                             published }
                                );
