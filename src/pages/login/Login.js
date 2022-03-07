import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <span className="login-title">Login</span>
        <form className="login-form">
            <label>Email</label>
            <input className="login-input" type="email" placeholder='abc@example.com'/>
            <label>Password</label>
            <input type="password" className="login-input" placeholder='********' />
            <button className="login-button">Log In</button>
        </form>
        <hr />
        <button className="login-register-button">
            <Link className="link" to="register/">Sign Up</Link>
        </button>
    </div>
  )
}
