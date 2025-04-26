import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import '../App.css'
import heroimg from '../assets/HeroImage.png'
import herombl from '../assets/heroimg.png'
import { Check } from "lucide-react";

const HeroSection = () => {

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
                        <div className="text-black lg:text-3xl text-2xl font-bold px-5 text-gray-900">
                            HANDSTAND
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-4">
                            <a href="#" className="text-xs text-gray-700 pt-1">Company Events</a>
                            <a href="#" className="text-xs text-gray-700 pt-1">Public Games</a>
                            <a href="#" className="text-xs text-gray-700 pt-1">Escape Rooms</a>
                            <a href="#" className="text-xs text-gray-700 pt-1">About Us</a>
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
                <div className="absolute left-6 md:left-20 bottom-0 hidden lg:block transform -translate-y-1/2 text-white">
                    <p className="text-xl md:text-xl font-light">An epic</p>
                    <h1 className="text-4xl md:text-[80px] font-bold leading-tight">
                        Scavenger Hunt<br />
                        in San Francisco
                    </h1>
                </div>
            </div>

            <div className="absolute w-full bg-cream py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text & Button */}
                <div className="max-w-xl">
                    <p className="text-gray-800 text-xl leading-relaxed mb-4">
                        Navigate the hills and hidden alleys of San Francisco, from the
                        Golden Gate Bridge to unique local spots. This hunt is perfect for
                        teams looking for a challenging and fun urban adventure.
                    </p>
                    <button className="bg-orange-600 text-white text-sm px-9 py-2 rounded-lg hover:bg-orange-800 transition">
                        Get a Quote
                    </button>
                </div>

                {/* Feature List */}
                <div className="absolute text-xl top-[-30px] right-[200px] bg-white rounded-xl shadow-lg py-7 px-4 space-y-3 w-[400px]">
                    {[
                        "Location-Based",
                        "Polished Technology",
                        "Scales to Hundreds of Players",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center border-b last:border-b-0 pb-3 last:pb-0"
                        >
                            <Check className="bg-green-600 size-5 p-[3px] text-white rounded-full mr-5 mt-1" />
                            <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default HeroSection
