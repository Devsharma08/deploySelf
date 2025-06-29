import React,{useEffect} from 'react';
import {nyay,chatbot,axios,couapi,currcon,website,fwebsite,passgem,todo,weather} from '../assets/assets'
import { Menu, X, Mail,Phone,MapPin, Linkedin, Github } from 'lucide-react'; 
import ConnectWorldwide from './World.jsx'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const projects = [
  {
    id: 1,
    title: 'NyayMitrr – AI Legal Chatbot',
    description: 'An AI-powered chatbot designed to guide users through legal rights and procedures using curated legal datasets.',
    image: nyay,
  },
  {
    id: 2,
    title: 'Website UI Clones',
    description: 'High-fidelity front-end clones of popular websites to practice responsive design and modern UI replication.',
    image: website,
  },
  {
    id: 3,
    title: 'Real-Time ChatBot App',
    description: 'A real-time chat application built with the MERN stack and Socket.IO, supporting instant messaging and user sessions.',
    image: chatbot,
  },
  {
    id: 4,
    title: 'Fashion Brand Clone',
    description: 'A visually striking fashion eCommerce UI clone focused on layout, color schemes, and user interactivity.',
    image: fwebsite,
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A weather forecast app that fetches real-time data using OpenWeatherMap API with elegant UI and location support.',
    image: weather,
  },
  {
    id: 6,
    title: 'Axios API Integration Demo',
    description: 'Demonstrates handling REST APIs using Axios in React apps including error management and async data rendering.',
    image: axios,
  },
  {
    id: 7,
    title: 'Countries Info App',
    description: 'Displays detailed information about countries using REST Countries API including filtering, search, and flags.',
    image: couapi,
  },
  {
    id: 8,
    title: 'Currency Converter',
    description: 'A lightweight currency converter that pulls live exchange rates and supports over 50 currencies.',
    image: currcon,
  },
];


export default function Home() {
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
  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      // className="min-h-screen"
    >
      {/* Your home content here */}
    
    <div id='projects' className="min-h-screen bg-black px-6 py-6 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-20 text-center font-mono">Projects</h1>
      <div className="grid md:grid-cols-2 gap-12 mb-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl  transition-all duration-600"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-600"
            />
            <div className="absolute inset-0 bg-black/80 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex flex-col brightness-150 justify-center items-center p-4 text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-white/90 brightness-100 font-thin">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Small Contact Section - Shows details, not a form */}
        <section id='contact' className=" backdrop-blur-sm rounded-xl p-8 sm:p-12 shadow-2xl text-center my-20">

          {/* <ConnectWorldwide/> */}

          <section className="relative w-full overflow-hidden bg-gray-950 text-white py-20 px-6">
      {/* Background Map Image */}
      <img
        src="https://kartikchandra14.github.io/img/flat/map.png"
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />


      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Connect with Us from Anywhere in the World
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
          Whether you’re in India or across the globe, we’re just a message away.
          Reach out to us for collaboration, queries, or support — anytime, anywhere.
        </p>
      </div>

          <div  className="relative flex justify-center items-center mb-6"> 
            <div className="absolute w-full border-t border-gray-700"></div>
            <span className="relative z-10 px-4 bg-gray-900/50 backdrop-blur-sm text-gray-400 text-xl font-semibold">
              Contact Us
            </span>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Mail size={36} className="text-white hover:text-gray-300 transition-colors duration-300" />
            <Phone size={36} className="text-white hover:text-gray-300 transition-colors duration-300" />
            <MapPin size={36} className="text-white hover:text-gray-300 transition-colors duration-300" />
          </div>

          <div className="flex flex-col sm:flex-row justify-around items-center space-y-6 sm:space-y-0 sm:space-x-6 text-xl text-gray-300 mt-10">
            <p className="flex items-center ">
              <a href="mailto:devsharma08072004@gmail.com" className="hover:text-white transition-colors z-50 duration-300">devsharma08072004<br/>@gmail.com</a>
            </p>
            <p className="flex items-center">
              <a href="tel:+91-9599503440" className="hover:text-white transition-colors duration-300">+91 9599503440</a>
            </p>
            <p className="flex items-center">
              Uttarakhand, India
            </p>
          </div>

      {/* Decorative Pulse Circle */}
      <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl animate-ping" />
    </section>

        </section>
    </div>
    </motion.div>
  );
}
