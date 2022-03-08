import React from 'react'
import store from '../store';

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            // fullname: this.props.toRegister.fullname,
            // email: this.props.toRegister.email,
            // username: this.props.toregister.username,
            // password: this.props.toRegister.password,
            isLogged: false,
            isRegistered: true,
        }
        
        this.loginStateChange = this.loginStateChange.bind(this);
    }
    
    loginStateChange() {
        this.setState(prevState => ({
            isLogged: !prevState.isLogged,
        }));
    }

    render() {
        return (
            <div>
                <pre>
                    {this.props.toRegister.fullname}
                    {this.props.toRegister.email}
                    {this.props.toRegister.username}
                </pre>
            {/* <button onClick={this.loginStateChange} >CHANGE</button> */}
                {/* <h1>{this.state.isLogged ? "True" : "False"}</h1> */}
            </div>
    )
  }
}
