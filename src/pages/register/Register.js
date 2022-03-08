import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom'
import User from '../../components/User'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

export default class Register extends React.Component {

  constructor(props)
  { 
    super(props);
    this.state = {
      fullname: "",
      email: "",
      username: "",
      password: "",
      isRegistered:false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(event) {
    // Below function prevents page from getting refreshed after submit
    event.preventDefault();
    this.setState(() => {
      return {
        // this feature is inrtoduced in ES6 where we can give value to  objects's props using []
        [event.target.name]: event.target.value,
        [event.target.isRegistered]: true,
      }
    })
  }


  // On change in form
  handleChange(event) {
    this.setState(() => {
      return  {  
        [event.target.name]: event.target.value,
      }
    })
  }


  render()
  {
    return (
      <div className="register">
        <div className="inner-register">
          <span className="register-title">Register</span>
          <form className="register-form" onSubmit={this.handleRegister}>
              <input 
                className="register-input" 
                type="email" 
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
              <input 
                type="text" 
                className="register-input" 
                placeholder="Full Name" 
                name="fullname"
                value={this.state.fullnamel}
                onChange={this.handleChange}
                
                />
              <input 
                className="register-input" 
                type="text" 
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                
                />
              <input 
                type="password" 
                className="register-input" 
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
              
              <button 
                type='submit'
                className="register-button" 
                onClick={this.handleChange}
                disabled={this.username}
                >
                Sign Up
              </button>
          </form>
          
        </div>
        <div className="register-inn">
              Already have an account? <Link className="link" to="/login/">&nbsp; Sign In</Link>
        </div>
      </div>
    )
  }
}

