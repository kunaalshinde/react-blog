import { useEffect, useState } from 'react'
import {Link, useLocation } from 'react-router-dom'
import back from '../images/backgro.jpeg'
import { fetchBlogbyId } from '../api/posts';

export default function SinglePost() {

    const location = useLocation();
    // pathname: "blogs/:34556rgfg7y56yyht7th"
    const path = location.pathname.split("/")[2]; 
    // console.log(path)
    const [post, setPost] = useState({});
    // Whenever this path changes(_id changes) execute this function
    useEffect(() => {
        const getBlog = async () => {
        try {
                const res = await fetchBlogbyId(path);
                setPost(res.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        getBlog();
    },[path]);

    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <img src={post.imageURL ? post.imageURL : back} 
                    className="singlepost-image" alt="" />
                <h1 className="singlepost-title">
                    {post.title}
                    <div className="singlepost-edit">
                        <i className="singlepost-icon fa-solid fa-pen-to-square"></i>
                        <i className="singlepost-icon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlepost-info">
                    <span className="singlepost-author">
                        <Link to={`/?user=${post.username}`} className="link">
                        <b>{post.username}</b> 
                         {/* Change Above */}
                        </Link>
                    </span>
                    <span className="singlepost-date">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <div>
                    <p className="singlepost-desc">
                        {post.body}
                    </p>
                </div>
            </div>
        </div>
  )
}
