import React from 'react'
import '../index.scss'
import store from '../store/store'
import  profile from '../images/admin.jpg'
import logo from '../images/home-logo.jpg'
import { Link, Navigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { logout } from '../store/actions'

const mapStateToProps = (state: any) => {
  return {
    isLogged: state.login.isLogged
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    Logout: () => dispatch(logout())
  }
}

class Header extends React.Component<{Logout: () => void},{isLogged?: boolean}> {

  constructor(props: any) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event: any): any {
    event.preventDefault();
    this.props.Logout();
  }

  render() {
    return (
      <div className='header-div'>
        {/* {console.log(`this value ${store.getState().login.isLogged}`)} */}
        {/* {console.log(log)} */}
        <div className="left">
        <Link className="link" to="/">
        <img src={logo} className="header-logo"/> 
        </Link>Blog
        </div>
        <div className="center">
          <ul className="headerList">
          <li className="headerListItem"><Link className='link' to="/" >HOME</Link></li>
          <li className="headerListItem"><Link className='link' to="/about/">ABOUT</Link> </li>
          <li className="headerListItem">CONTACT</li>
          <li className="headerListItem"><Link className='link' to="/write/">WRITE</Link></li>
          {store.getState().login.isLogged
           && 
            <li className="headerListItem" onClick={this.handleLogout}>LOGOUT</li>}
            {/* show only when user is logged in */}
          </ul>
        </div>
        <div className="right">
          {store.getState().login.isLogged ?
          (<img src={store.getState().login.user.profilePic} className="header-Profile" />) :
          (<ul className="headerList">
          <li className="headerListItem"><Link className='link' to="/login/" >LOGIN</Link></li>
          <li className="headerListItem"><Link className='link' to="/register/">REGISTER</Link></li>
          </ul>)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);