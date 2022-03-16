import React from 'react'
import '../../index.scss'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginstart, loginfailure, loginsuccess } from '../../store/actions'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { login } from '../../api/user'

const mapStateToProps = state => {
    return {
      isLogged: state.login.isLogged,
      user: state.login.user,
      isFetching: state.login.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       Loginstart: () => dispatch({type: 'LOGIN_START'}),
//       Loginsuccess: (data) => dispatch({type: 'LOGIN_SUCCESS', payload: data}),
//       Loginfailure: () => dispatch({type: 'LOGIN_FAILURE'})
//       // logout: () => dispatch(logout())
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    Loginstart: () => dispatch(loginstart()),
    Loginsuccess: (data) => dispatch(loginsuccess(data)),
    Loginfailure: () => dispatch(loginfailure())
  }
}

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogged: this.props.isLogged,
      success: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this); 
  }
  

  handleLogin = async (event) => {
    // Below function prevents page from getting refreshed after submit
    event.preventDefault();
    // This is the main call to action 
    // this.props.login(this.state.isLogged);
    this.props.Loginstart();
    try {
      const res = await login({
        username: this.state.username,
        password: this.state.password,
      });
      this.props.Loginsuccess(res.data);
    }
    catch(err) {
      this.props.Loginfailure();
    }
    this.setState(() => {
      return {
        // this feature is inrtoduced in ES6 where we can give value to  objects's props using []
        [event.target.name]: event.target.value,
        isLogged: true,
        success: true
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
  
  
  render() {
    // console.log(this.props.isFetching);
    if(this.state.success)
    {
      return ( <Navigate to='/' />)
    }
    return (
      <div className="login"> 
        <div className="inner-login">
          <span className="login-title">Login</span>
          <form className="login-form" onSubmit={this.handleLogin} >
              <input 
                className="login-input" 
                type="text"
                name="username"
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input 
                type="password" 
                className="login-input"
                name="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button 
                className="login-button" 
                type='submit'
                disabled={this.props.isFetching}
              >Log In</button>
          </form>
        </div>
        <div className="login-inn">
              Do not have an account?<Link className="link" to="/register/">&nbsp;Sign Up</Link>
          </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)