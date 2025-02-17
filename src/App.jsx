import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyAppointements from './pages/MyAppointements'
import Appointments from './pages/Appointments'
import Contacts from './pages/Contacts'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10]'> 
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='doctors' element={<Doctors />} />
        <Route path='doctors/:speciality' element={<Doctors />} />
        <Route path='login' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contacts />} />
        <Route path='my-profile' element={<MyProfile />} />
        <Route path='my-appointments' element={<MyAppointements />} />
        <Route path='appointment/:docId' element={<Appointments/>} />
      </Routes> 
    </div>
  )
}

export default App