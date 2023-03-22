import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Skills from './pages/Skills'

function App() {

  return (
    <div className='flex flex-col'>
        <header className='sticky top-0'><Navbar/></header>
        <Hero/>
        <About/>
        <Skills/>
        <Contact/>
       <footer> <Footer/></footer>
    </div>
  )
}
export default App
