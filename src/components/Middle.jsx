import React from 'react'
import '../index.scss'
import image from '../images/main.jpg'

export default function Middle() {
  return (
    <div className="middle">
        <div className="middleTitle">
            <span className="middleTitleSm">teqie.io</span>
            <span className="middleTitleLg">TEQIE.</span>
        </div>
        <img src={image} className="middle-image" />
    </div>
  )
}
