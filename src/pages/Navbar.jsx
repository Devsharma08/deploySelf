import React, { useState, useEffect } from 'react';
import { Menu, X, Mail,Phone,MapPin, Linkedin, Github } from 'lucide-react'; 
import DevSharmaLogo from './DevLogo';
import NavLinks from './Links';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


// NavBar Component
const NavBar = () => {

  const navigate = useNavigate();

  const goToSection = (path, sectionId) => {
    navigate(path, { state: { scrollTo: sectionId } });
  }

  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  // Function for smooth scrolling to sections
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     setIsOpen(false); // Close menu after clicking a link on mobile
  //   }
  // };

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      // className="min-h-screen"
    >
      {/* Your home content here */}
   
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md shadow-lg rounded-b-xl px-4 sm:px-8 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
        >
          <DevSharmaLogo/>
        </button>

      
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        <div className="hidden md:flex items-center space-x-8">
          

        <nav className="text-white px-6 py-4 flex space-x-6 items-center">
          {/* <button onClick={() => goToSection('/', 'home')}></button> */}

      {/* <button onClick={() => scrollTo('home')} ></button> */}
    <button onClick={() => scrollTo('about')} ><button onClick={() => goToSection('/about', 'about')}><NavLinks to="/about">About</NavLinks></button></button>
    <button onClick={() => scrollTo('projects')} ><button onClick={() => goToSection('/projects', 'projects')}><NavLinks to="/projects">Projects</NavLinks></button></button>
    <button onClick={() => scrollTo('contact')} ><button onClick={() => goToSection('/contact', 'contact')}><NavLinks to="/contact">Contact</NavLinks></button></button>

      
      
      

          
          
          
        </nav>


          {/* Social media icons for desktop */}
          <div className="flex space-x-4 ml-6">
            <a href="mailto:devsharma08072004@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dev-sharma-708074321/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Devsharma08" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-gray-300 transition-colors duration-300">
              <Github size={24} />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          <button onClick={() => scrollToSection('hero')} className="text-lg text-white hover:text-gray-300 transition-colors duration-300 font-medium">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-lg text-white hover:text-gray-300 transition-colors duration-300 font-medium">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-lg text-white hover:text-gray-300 transition-colors duration-300 font-medium">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-lg text-white hover:text-gray-300 transition-colors duration-300 font-medium">Contact</button>
          <div className="flex space-x-6 pt-4">
            <a href="mailto:devsharma08072004@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dev-sharma-708074321/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/Devsharma08" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Github size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
    </motion.div>
  );
};

export default NavBar;