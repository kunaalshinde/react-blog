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

export default class App extends React.Component {

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
                path="register/" 
                // element={this.user.isLogged ? <Home /> : <Register />}
                element={<Register />}
              />
              <Route 
                path="login/" 
                // element={this.user.isLogged ? <Home /> : <Login />}
                element={<Login />}
              />
              <Route 
                path="settings/" 
                // element={this.user.isLogged ? <Settings /> : <Login />}
                element={<Settings />}
              />
              <Route 
                path="post/:postId" 
                element={<Single />}
              />
              <Route
                path="write/" 
                // element={this.user.isLogged ? <Write /> : <Login />}
                element={<Write />}
              />
            </Routes>
        </BrowserRouter>
      );
    }
  }