import React,{useEffect} from 'react';
import NavBar from './Navbar';
import DownloadResume from './Download'; 
import { useLocation,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


// Main App component
const Header = () => {

const location = useLocation();
const navigate = useNavigate();

const goToSection = (path, sectionId) => {
    navigate(path, { state: { scrollTo: sectionId } });
  }

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Wait a bit for render
      }
    }
  }, [location]);
  return (
      
    <>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      // className="min-h-screen"
    >
      {/* Your home content here */}
    
    <div id='home' className="min-h-screen bg-black flex flex-col items-center justify-center font-inter text-white relative overflow-hidden p-4 sm:p-8 ">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none opacity-70"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-3 py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

        
        <section className="text-left py-16 sm:py-24">
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-lg mb-6">
            Hi, I'm <span className="text-gray-300">Dev Sharma</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            A <span className="font-semibold text-white">MERN Stack Developer</span> crafting intuitive and delightful digital experiences.
            My work focuses on solving complex problems with user-centered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Call to action button for viewing projects */}

            <div class="box-2">
              <div class="btn btn-two">
                <button onClick={() => goToSection('/projects', 'projects')} > View My Work</button>
              </div>
            </div>
            
            
            
            {/* Secondary call to action button for contact */}
            <div class="box-2">
              <div class="btn btn-two">
              <button onClick={() => goToSection('/contact', 'contact')}> Get in Touch</button>
              </div>
            </div>
            </div>
        </section>

        {/* About Section - Brief introduction about the designer */}
        <section id='about' className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 sm:p-12 shadow-2xl border border-gray-700">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center sm:text-left">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                Hi, I'm Dev Sharma, a passionate MERN Stack Developer with a strong focus on building modern, responsive web applications. I specialize in MongoDB, Express.js, React, and Node.js, crafting seamless user experiences and scalable backend systems. Whether it's designing intuitive frontends or integrating powerful APIs, I enjoy turning complex problems into clean, efficient solutions.
              </p>
              <p>
                My approach is deeply rooted in empathy and a data-driven mindset, ensuring that every design decision
                is purposeful and aligns with both user needs and business objectives.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0.4, scale: 0.85 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="hidden md:flex items-center justify-center relative"
              >         
              <motion.img
                src='/files/myImg.png'
                alt="Dev Sharma"
                className="rounded-xl shadow-xl border border-gray-700 hover:scale-95 transition-transform duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
              <div className="absolute w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -z-10 top-4 right-4 animate-pulse"></div>
              </motion.div>
          {/* </div> */}
          </div>
          <DownloadResume/>
        </section>
        
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default Header;
