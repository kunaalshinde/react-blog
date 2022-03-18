import React, { useEffect } from 'react'
import Middle from '../../components/Middle'
import Blogs from '../../components/Blogs'
import '../../index.scss'
import { fetchBlogs } from '../../api/posts';
import { useLocation } from 'react-router-dom';
import store from '../../store/store';

export default function Home() {
  const [blogs, setBlogs] = React.useState([]);
  const { search } = useLocation();

  const fetchAllBlogs = async () => {
    const res = await fetchBlogs(search);
    setBlogs(res.data);
  }

  useEffect(() => {
    fetchAllBlogs();
  },[search]);
  
  return (
    <>
      <Middle />
      <div className='home'>
        <Blogs blogs={blogs}/>
      </div>
    </>
  )
}
