import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Home from '../pages/Home'
import Register from '../pages/Register'
import LogIn from '../pages/LogIn'
const Routers = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Routers
