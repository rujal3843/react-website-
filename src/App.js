import React from 'react'
import { Nav } from './component/Nav'
import { Home } from './component/Home'
import { Service } from './component/Service'
import { About } from './component/About'
import { Article } from './component/Article'
import { Contact } from './component/Contact'
// import { Footer } from './component/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      {/* <Home />
      <Service />
      <About />
      <Article />
      <Contact />
      <Footer /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='service' element={<Service />} />
        <Route path='about' element={<About />} />
        <Route path='articel' element={<Article />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App