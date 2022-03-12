import React from 'react'
import '../../index.scss'
import store from '../../store/store';
import { Link, Navigate } from 'react-router-dom'
import { register } from '../../store/actions';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isRegistered: state.login.isRegistered
  }
}

class Register extends React.Component {

  constructor(props)
  { 
    super(props);
    this.state = {
      fullname: "",
      email: "",
      username: "",
      password: "",
      isRegistered: this.props.isRegistered,
      gotohome: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  
  handleRegister(event) {
    event.preventDefault();
    this.props.register(this.state.isRegistered)
    this.setState(() => {
      return {
        [event.target.name]: event.target.value,
        isRegistered: true,
        gotoLogin: true
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
    if(this.state.gotoLogin)
    {
      return ( <Navigate to='/login' /> )
    }
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


export default connect(mapStateToProps, { register })(Register)