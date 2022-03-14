import React from "react";
import ReactDOM from "react";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { connect } from "react-redux";
import { LoginType } from "./types.d";
import store from "./store/store";

const mapStateToProps = (state: any): any => {
  return {
    isLogged: state.login.isLogged
  }
}

class App extends React.Component<{isLogged?: boolean} ,{}> {
    render() {
      return (
        <BrowserRouter>
            <Header />
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
            />
              <Route 
                path="/register/" 
                // element={this.props.isLogged ? <Home /> : <Register />}
                element={<Register />}
              />
              <Route 
                path="/login/" 
                // element={this.props.isLogged ? <Home /> : <Login />}
                element={<Login />}
              />
              <Route 
                path="/settings/" 
                element={this.props.isLogged ? <Settings /> : <Login />}
                // element={<Settings />}
              />
              <Route 
                path="/blog/:postId" 
                element={<Single />}
              />
              <Route
                path="/write/" 
                element={this.props.isLogged ? <Write /> : <Login />}
                // element={<Write />}
              />
            </Routes>
        </BrowserRouter>
      );
    }
  }

  export default connect(mapStateToProps, null)(App)