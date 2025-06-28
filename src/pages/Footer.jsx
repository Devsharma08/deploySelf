import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {

const location = useLocation();

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

  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      // className="min-h-screen"
    >
      {/* Your home content here */}
    
    <footer
      ref={footerRef}
      id="footer"
      className={`relative overflow-hidden bg-[#1e1e24] text-white transition-opacity duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100' : 'opacity-0'} border-t border-gray-800 pt-14 px-4`}
    >
      {/* Glowing Animated Blobs */}
      <div className="absolute w-[250px] h-[250px] bg-blue-600/20 rounded-full blur-3xl animate-[ping_8s_linear_infinite] top-[-80px] left-[-80px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-pink-500/20 rounded-full blur-2xl animate-[ping_10s_linear_infinite] bottom-[-60px] right-[-60px]"></div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    item === 'Home'
                      ? scrollToTop()
                      : document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white transition duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="text-gray-400 space-y-2 mb-4">
            <p className="flex justify-center md:justify-start items-center gap-2 hover:text-white">
              <Mail size={18} /> devsharma08072004@gmail.com
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 hover:text-white">
              <Phone size={18} /> +91 9599503440
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 hover:text-white">
              <MapPin size={18} /> Uttarakhand, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a href="mailto:devsharma08072004@gmail.com" target="_blank" className="hover:scale-110 transition">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dev-sharma-708074321/" target="_blank" className="hover:scale-110 transition">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/Devsharma08" target="_blank" className="hover:scale-110 transition">
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 text-center text-gray-500 text-sm mt-10 pt-6 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Dev Sharma. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="mt-3 inline-flex items-center text-gray-400 hover:text-white transition hover:scale-105"
        >
          <ArrowUpCircle size={20} className="mr-1" />
          Back to Top
        </button>
      </div>
    </footer>
    </motion.div>
  );
};

export default Footer;
