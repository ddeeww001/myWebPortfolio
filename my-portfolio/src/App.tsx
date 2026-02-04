import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import{Link} from'react-router-dom'
import Experience from './frontend/Experience'


function App() {
 

  return (
    <>
    <div className='head'>
    <p>THITIRAT SIRISAWAD</p>
    <h1>PORTFOLIO</h1>
    </div>
    <Experience/>
    
    </>
  );
}

export default App
