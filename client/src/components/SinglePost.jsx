import { useEffect, useState } from 'react'
import {Link, useLocation } from 'react-router-dom'
import back from '../images/backgro.jpeg'
import store from '../store/store';
import { deleteBlog, fetchBlogbyId, updateBlog } from '../api/posts';
import '../index.scss';
import { fetchuser } from '../api/user';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function SinglePost() {

    let name = "K";
    // useSelector is equivalent to mapStateToProps
    const user = useSelector(state => state.login.user);
    // useDispatch is equivalent to mapDispatchToProps
    // const dispatch = useDispatch();
    const location = useLocation();
    // pathname: "blogs/:34556rgfg7y56yyht7th"
    const path = location.pathname.split("/")[2]; 
    // console.log(path)
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [published, setPublished] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);

    // Whenever this path changes(_id changes) execute this function
    useEffect(() => {
        const getBlog = async () => {
        try {
                const res = await fetchBlogbyId(path);
                setPost(res.data);
                setTitle(res.data.title);
                setBody(res.data.body);
                setPublished(res.data.published);
            }
            catch(err) {
                console.log(err);
            }
        }
        getBlog();
    },[path]);

    // Fetch full name to display instead of username
    const nameofUser = async (username) => {
        try {
            const res = await fetchuser(username);
            console.log(res);
            name = res.fullname;
        }
        catch(err) {}
    }

    // name = nameofUser(post.username);
    console.log(name);

    const handleDelete = async () => {
        try {
            await deleteBlog(post._id, user.username);
            window.location.replace("/");
        }
        catch(err) {
            console.log(err);
        }
    }

    const handleUpdate = async () => {
        try {
            await updateBlog(post._id, user.username, title, body, published);
            // window.location.reload();
            setUpdateMode(false);
        }
        catch(err)
        {
            console.log(err);
        }
    }


    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <img src={post.imageURL ? post.imageURL : back} 
                    className="singlepost-image" alt="" />
                {
                    updateMode ? <input 
                                    type="text" 
                                    value={title} 
                                    className="singlepost-title-input"
                                    onChange={(e) => setTitle(e.target.value)}
                                    autoFocus
                                /> :
                    (
                        <h1 className="singlepost-title">
                        {title}
                        {post.username === store.getState().login.user?.username &&
                        (<div className="singlepost-edit">
                            <i 
                                className="singlepost-icon fa-solid fa-pen-to-square"
                                onClick={() => setUpdateMode(true)}
                                ></i>
                            <i 
                                className="singlepost-icon fa-solid fa-trash-can" 
                                onClick={handleDelete}
                                ></i>
                        </div>)}
                        </h1>
                    )
                }
                <div className="singlepost-info">
                    <span className="singlepost-author">
                        <Link to={`/?user=${post.username}`} className="link">
                        <b>{name}</b> 
                         {/* Change Above  instead of username it should be username*/}
                        </Link>
                    </span>
                    <span className="singlepost-date">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <div>
                    {updateMode ?
                        (<textarea 
                            className='singlepost-desc-input'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        /> ) :
                    (<p className="singlepost-desc">
                        {body}
                    </p>
                    )}
                    {updateMode && 
                        (<div className='singlepost-buttons'>
                            <button 
                                className="singlepost-draft"
                                value={!published}
                                onClick={() => setPublished(false)}
                                disabled={!published}
                                >
                            DRAFT
                            </button>
                            <button 
                                className="singlepost-draft"
                                value={published}
                                onClick={() => setPublished(true)}
                                disabled={!published}
                                >
                            PUBLISHED
                            </button>
                            <button 
                                className="singlepost-button"
                                onClick={handleUpdate}
                                >
                            Update
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
  )
}
