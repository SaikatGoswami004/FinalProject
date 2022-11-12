import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Navbar = () => {
  return (
    <div className='header'>
    <h3 className='logo'>SEE<RemoveRedEyeOutlinedIcon/></h3>
    <ul className='header-menu'>
    <li><NavLink to="/home" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/weather" className="nav-link">Weather</NavLink></li>
        <li><NavLink to="/todo" className="nav-link">Todo</NavLink></li>
        <li><NavLink to="/calculator" className="nav-link">Calculator</NavLink></li>
        <li><NavLink to="/login" className="nav-link">Login Form</NavLink></li>
        <li>Chat</li>
    </ul>
    {/* <button className='sign-in'>Sign in</button> */}
        
    </div>
  )
}

export default Navbar