import './App.css'
import Home from './Components/Home/Home'

import Login from './Components/Login/Login'

import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/login' element = {<Login/>}></Route>
        </Routes>
      </HashRouter>
    </div> 
  )
}

export default App
