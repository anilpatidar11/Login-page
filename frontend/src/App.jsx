import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import Home from './components/Home'
import Welcome from './Welcome'



const App = () => {
  return (
    <div>

<Navbar/>

      <Routes>
        
        
        <Route path='/' element={<Home/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
        <Route path='/contact' element={<Contact/> }></Route>
        <Route path='/welcome' element={<Welcome/>}>  </Route>
      </Routes>



      
    </div>
  )
}

export default App 