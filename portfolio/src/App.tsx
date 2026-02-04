import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, Link, Router} from "react-router-dom"
import './App.css'
import Experience from './frontend/showExperience'
import { Profile,myDetailsData} from './frontend/Personal'

const Navbar=()=>{
  return(
    <div className="navbar">
    <nav>
    
   {/* <Link to ="/" >Home</Link> */}
    <Link to ="/Experiance" >Experiance</Link>
    <Link to ="/Profile" >Profile</Link>

    </nav>
    </div>
  );
};
function App() {
  

  return (
    <>
     <BrowserRouter>
     <div className='navebar'>
      <Navbar/>
      
      {/*เนื้อหาจะเปลี้ยนไปตาม url ใน to="/..." */}
      <Routes>
        <Route path='/Experiance' element={<Experience/>}/>
        <Route path='/Profile' element={<Profile data={myDetailsData}/>}/>
      </Routes>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
