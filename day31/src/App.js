import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path = '/about' element = {<About/>} ></Route>
                <Route path = '/' element = {<Home/>} ></Route>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App