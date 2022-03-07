import React from 'react'
import '../index.scss'
import image from '../images/stars.svg'

export default function Middle() {
  return (
    <div className="middle">
        <div className="middleTitle">
            <span className="middleTitleSm">Blog</span>
            <span className="middleTitleLg">React</span>
        </div>
        <img src={image} 
            className="middle-image" />
    </div>
  )
}
