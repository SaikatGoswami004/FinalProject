import React from 'react'
import "./Login.css";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="loginpage">
    <div className="blue-container">
      <div className="login-left">
        <div className="welcome-div">
          <div>
            <p className="welcome-text">Welcome</p>
            <br></br>
            <p className="welcome-text2">
              Please Login <br></br> and <br></br> Enjoy our Services{" "}
            </p>
          </div>
        
        </div>
      </div>
      <div className="login-right">
        <div className="employee-hirer">
          <div className="employee-hirer-bg">
            <p className="employee">
              <NavLink to="/employee" className="nav-link">Emplyoee</NavLink>
            </p>
            <p className="hirer">
              <NavLink to="/hirer" className="nav-link">Hirer</NavLink>
            </p>
          </div>
        </div>
        <div className="heading">
          <span>Login</span>
        </div>

        <div className="loginpage-form">
          <div className="loginpage-form-left">
            
            
            <input type="email" placeholder="Your Email *"/>
            <input type="password" placeholder="PassWord *"/>
           
          </div>
          
          
        </div>
        <button className="LoginPage-loginButton">Login</button>
      </div>
    </div>
  </div>
  )
}
  

export default LoginButton