import './App.css'
import { Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import NavBar from './pages/Navbar';

function App() {

  return (
    <>
      <NavBar/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
