import { BlogCreated, BlogUpdated, BlogRemoved, GetAll, drafted } from "../actionTypes";
import { InitBlog } from "../../types";

const initialState: InitBlog = {
    id: "",
    blogs: []
}

export default function blogReducer(state: InitBlog = initialState, action: any): InitBlog {
    switch(action.type) {
        case BlogCreated: return {
                            ...state,
                            blogs: state.blogs.concat(action.blogs[0]),
                        }

        case BlogUpdated: const { title, body, published } = action.blogs[0];
                          return {
                            ...state,
                            blogs: state.blogs?.map(blog =>
                                blog._id !== action.blogs[0]._id ? 
                                blog : 
                                { ...blog, title, body, published }
                            )
                        }

        case BlogRemoved: return {
                            ...state,
                            blogs: state.blogs.filter(blog => blog._id !== action.blogs[0]._id)
                        }

        case drafted: return {
                            ...state,
                            blogs: state.blogs.map(blog => 
                                blog._id === action.blogs[0]._id ?
                                { ...blog, published: !blog.published } :
                                blog
                            )
                        }

        case GetAll: return {
                        ...state,
                        blogs: action.blogs,
                    }

        default: return state;
    }
}