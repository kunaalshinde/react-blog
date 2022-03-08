import React from 'react'
import '../index.scss'
import profile from '../images/people.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-div'>
      <div className="left">
        <i className="header-Icons fa-brands fa-facebook"></i>
        <i className="header-Icons fa-brands fa-instagram"></i>
        <i className="header-Icons fa-brands fa-twitter"></i>
      </div>
      <div className="center">
        <ul className="headerList">
        <li className="headerListItem"><Link className='link' to="/" >HOME</Link></li>
        <li className="headerListItem"><Link className='link' to="/about/">ABOUT</Link> </li>
        <li className="headerListItem">CONTACT</li>
        <li className="headerListItem"><Link className='link' to="/write/">CREATE</Link></li>
        {/* <li className="headerListItem">LOGOUT</li> show only when user is logged in */}
        </ul>
      </div>
      <div className="right">
        {/* <img src={profile} className="header-Profile" /> */}
        {/* if user is logged in show profile picture else show options to login and register */}
        <ul className="headerList">
        <li className="headerListItem"><Link className='link' to="login/" >LOGIN</Link></li>
        <li className="headerListItem"><Link className='link' to="register/">REGISTER</Link></li>
        </ul>

        <i className="header-Search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
