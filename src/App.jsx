import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programs from './components/Programs/Programs'
import Navbar from './components/Navbar/Navbar'
import Instructors from './components/Instructors/Instructors'
import Footer from './components/Footer/Footer'
import About from './pages/About'
import Contacts from './pages/Contacts'
import JoinNow from './pages/JoinNow'




const App = () => {
  return (
    <Router>
     
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/programs' element={<Programs />}/>
        <Route path='/instructors' element={<Instructors />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/join' element={<JoinNow />}/>
      </Routes>
      <Footer />
     
    </Router>
  )
}

export default App
