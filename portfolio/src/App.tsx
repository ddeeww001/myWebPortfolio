import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Experience from './frontend/showExperience'
import { Profile,myDetailsData} from './frontend/Personal'

const Navbar=()=>{
  return(
    <div className="navbar">
    <nav>
    
   <Link to ="/" >Home</Link>
    <Link to ="/Experience" >Experience</Link>
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
      
      <div className="content-area">
      {/*เนื้อหาจะเปลี้ยนไปตาม url */}
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Profile' element={<Profile data={myDetailsData}/>}/>
      </Routes>
      </div>
      <div className="body">
        <h1></h1>
      </div>




     </div>

     </BrowserRouter>
    </>
  )
}

export default App
