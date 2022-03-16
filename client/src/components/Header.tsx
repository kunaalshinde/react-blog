import '../index.scss'
import store from '../store/store'
import  profile from '../images/admin.png'
import logo from '../images/home-logo.jpg'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions'
import { useEffect, useState } from 'react'

export default function Header() {

  let isLogged = store.getState().login.isLogged;
  const dispatch = useDispatch();

  function handleLogout(): any {
    console.log(isLogged);
    dispatch(logout);
    isLogged = false;
    console.log(isLogged);
  }

  return (
    <div className='header-div'>
      {/* {console.log(store.getState())} */}
      {/* {console.log(log)} */}
      <div className="left">
      <Link className="link" to="/">
      <img src={logo} className="header-logo"/> 
      </Link>Blog
      </div>
      <div className="center">
        <ul className="headerList">
        <li className="headerListItem"><Link className='link' to="/" >HOME</Link></li>
        <li className="headerListItem"><Link className='link' to="/about/">ABOUT</Link> </li>
        <li className="headerListItem">CONTACT</li>
        <li className="headerListItem"><Link className='link' to="/write/">WRITE</Link></li>
        {isLogged && 
          <li className="headerListItem" onClick={handleLogout}>LOGOUT</li>}
          {/* show only when user is logged in */}
        </ul>
      </div>
      <div className="right">
        {isLogged ?
        (<img src={profile} className="header-Profile" />) :
        (<ul className="headerList">
        <li className="headerListItem"><Link className='link' to="/login/" >LOGIN</Link></li>
        <li className="headerListItem"><Link className='link' to="/register/">REGISTER</Link></li>
        </ul>)}
      </div>
    </div>
  )
}