import React, { useState, useRef } from "react"
import './App.css';
import About from './Components/About/About';
import Land from './Components/Land/Land';
import Navbars from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {

  const [aboutScroll, setAboutScroll] = useState(0);
  const skillsWidth = useRef();
  const portfolioWidth = useRef();
  const contactWidth = useRef();
  console.log(aboutScroll)
  return (
    <div className="App">
      <Navbars />
      <Land />
      <About scroll={aboutScroll} />
      <Skills scroll={skillsWidth} />
      <Portfolio scroll={portfolioWidth} />
      <Contact scroll={contactWidth} />
      <Footer />
    </div>
  );
}

export default App;
