import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Skills from './pages/Skills'


function App() {

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
  return (
    <div className='flex flex-col'>
        <header id='header' className='sticky top-0'><Navbar/></header>
        <Hero/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default App
