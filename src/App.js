import React, { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Bio from './Components/Bio';
import Skills from './Components/Skills';
import Workexperience from './Components/Workexperience';
import Education from './Components/Education';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import DarkMode from './Components/DarkMode';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("dark-mode", JSON.stringify(true));
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", JSON.stringify(false));
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative h-full overflow-y-auto antialiased ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
        <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
          <Hero/>
          <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Navbar/>
          <Projects/>
          <Bio/>
          <Skills/>
          <Workexperience/>
          <Education/>

         
          <ContactForm isDarkMode={isDarkMode} />

          <Footer/>
        </div>
    </div>
  );
}

export default App;
