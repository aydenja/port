import React from 'react'
import Header from './comp/header/Header'
import About from './comp/about/About'
import Part from './comp/particles/Part';
import Hello from './comp/hello/Hello';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';




export const App = () => {
  
  return (
    <>
    <Part/>
    <Header/>
    
    
    
    <Router>
   
    <Routes>
        {<Route exact path='/' element={<Hello/>} />}
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
    </>
  )
}


export default App