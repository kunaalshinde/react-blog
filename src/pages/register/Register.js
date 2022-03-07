import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
        <span className="register-title">Register</span>
        <form className="register-form">
            <label>Email</label>
            <input className="register-input" type="email" placeholder='abc@example.com'/>
            <label>Username</label>
            <input className="register-input" type="text" placeholder='abc'/>
            <label>Password</label>
            <input type="password" className="register-input" placeholder='********' />
            <button className="register-button">Sign Up</button>
        </form>
        <hr />
        <button className="register-login-button">
            <Link className="link" to="login/">Sign In</Link>
        </button>
    </div>
  )
}
