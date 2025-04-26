import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './App.css'
import heroimg from './assets/HeroImage.png'
import herombl from './assets/heroimg.png'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>

      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={heroimg}
          alt="Scavenger Hunt"
          className="absolute lg:flex hidden w-full h-full object-cover"
        />
        <img
          src={herombl}
          alt="Scavenger Hunt"
          className="absolute w-full lg:hidden h-full object-cover"
        />

        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-6 z-20">
          <div className="flex items-center space-x-2">
            <div className="text-white lg:text-3xl text-2xl font-bold px-5 text-gray-900">
              HANDSTAND
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-sm text-gray-700 pt-1">Company Events</a>
              <a href="#" className="text-sm text-gray-700 pt-1">Public Games</a>
              <a href="#" className="text-sm text-gray-700 pt-1">Escape Rooms</a>
              <a href="#" className="text-sm text-gray-700 pt-1">About Us</a>
            </div>
          </div>

          <button className="bg-orange-600 hidden lg:block hover:bg-orange-800 text-white lg:px-10 lg:py-2 px-3 py-2 rounded-md text-xs font-semibold">
            Get a Quote
          </button>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden space-x-3">
            <button className="bg-orange-600 hover:bg-orange-800 text-white lg:px-10 lg:py-2 px-3 py-2 rounded-md text-xs font-semibold">
            Get a Quote
          </button>
          <button onClick={toggleMenu} className="text-gray-900 text-3xl focus:outline-none">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full flex flex-col items-center bg-white space-y-4 py-4 z-10">
            <a href="#" className="text-gray-700 text-lg">Company Events</a>
            <a href="#" className="text-gray-700 text-lg">Public Games</a>
            <a href="#" className="text-gray-700 text-lg">Escape Rooms</a>
            <a href="#" className="text-gray-700 text-lg">About Us</a>
          </div>
        )}

        {/* Hero Text */}
        <div className="absolute left-6 md:left-16 bottom-0 hidden lg:block transform -translate-y-1/2 text-white">
          <p className="text-xl md:text-xl font-light">An epic</p>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Scavenger Hunt<br />
            in San Francisco
          </h1>
        </div>
      </div>

    </>
  )
}

export default App
