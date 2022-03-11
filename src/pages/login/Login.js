import React from 'react'
import '../../index.scss'
import { Link, Navigate } from 'react-router-dom'
import store from '../../store/store'
import { connect } from 'react-redux'
import { login } from '../../store/actions'
import { isDisabled } from '@testing-library/user-event/dist/utils'

const mapStateToProps = state => {
    return {
      isLogged: state.login.isLogged
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       getLoggedin: () => dispatch(login()),
//       // logout: () => dispatch(logout())
//   }
// }
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogged: this.props.isLogged,
      gotoHome: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this); 
  }
  

  handleLogin(event) {
    // Below function prevents page from getting refreshed after submit
    event.preventDefault();
    // This is the main call to action 
    this.props.login(this.state.isLogged);
    this.setState(() => {
      return {
        // this feature is inrtoduced in ES6 where we can give value to  objects's props using []
        [event.target.name]: event.target.value,
        isLogged: true,
        gotoHome: true
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
    if(this.state.gotoHome)
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
                type="email"
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


export default connect(mapStateToProps, { login })(Login)