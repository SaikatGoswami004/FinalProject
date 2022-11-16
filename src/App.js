import React from 'react'
import "./index.css"
import Navbar from './component/Navbar/Navbar.jsx'
import HeroSection from './component/Hero-section/HeroSection'
import {Routes,Route} from "react-router-dom"
import Weather from './component/Watherapp/Weather'
import Todo from './component/Todo/Todo';
// import Calculator from "./component/Calculator/Calculator.jsx";
import Login from "./component/Login-Form/Login.jsx";
// import Login from './component/Login-Form/Login.jsx'
import Hirer from './component/Login-Form/Hirer'
import LoginButton from "./component/Login-Form/LoginButton.jsx"


const App = () => {
  return (
    <div className='container'>
    <Navbar/>
    <Routes>
      <Route path='weather' element={<Weather/>}/>
      <Route path='/home' element={<HeroSection/>}/>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/todo' element={<Todo/>}/>
      {/* <Route path='/calculator' element={<Calculator/>}/> */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/employee" element={<Login/>}/>
      <Route path="/hirer" element={<Hirer/>}/>
      <Route path="/userlogin" element={<LoginButton/>}/>


    </Routes>
    
  
      
    </div>
  )
}

export default App
