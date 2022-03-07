import React from 'react'
import '../index.scss'
import people from '../images/people.svg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img src={people} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam fugiat, ipsam nam quo placeat laborum ex iste exercitationem, et quod doloremque atque odit voluptas veniam architecto minus deserunt numquam aut.</p>
        </div>
        <div className="sidebar-item">
            <spam className="sidebar-title">CATEGORIES</spam>
            <ul className="sidebar-list">
                <li className="sidebar-listitem">Life</li>
                <li className="sidebar-listitem">Music</li>
                <li className="sidebar-listitem">Style</li>
                <li className="sidebar-listitem">Sport</li>
                <li className="sidebar-listitem">Tech</li>
            </ul>
        </div>
        <div className="sidebar-item">
            <span className="sidebar-title">FOLLOW US</span>
            <div className="sidebar-social">
            <i className="sidebar-Icon fa-brands fa-facebook"></i>
            <i className="sidebar-Icon fa-brands fa-instagram"></i>
            <i className="sidebar-Icon fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
  )
}
