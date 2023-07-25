import React, { useContext } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Experience from "./pages/Exp";

import { DarkModeContext } from "./context/DarkModeContext";
import Cha from "./pages/Cha";
import Navigation from "./components/Navigation";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`
    ${darkMode ? `Container Container-dark` : `Container Container-light`}`}
    >
      <header id="header" className="sticky top-0 z-10">
        <Navbar />
      </header>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
