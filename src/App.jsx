import './App.css'
import heroimg from './assets/HeroImage.png'

function App() {

  return (
    <>
       <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={heroimg}
        alt="Scavenger Hunt"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute"></div>

      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-6">
        <div className="hidden md:flex space-x-2 text-white font-medium">
        <div className="text-white text-2xl font-bold px-5 text-gray-900">HANDSTAND</div>
          <a href="#" className="text-xs pt-[10px] text-gray-800">Company Events</a>
          <a href="#" className="text-xs pt-[10px] text-gray-800">Public Games</a>
          <a href="#" className="text-xs pt-[10px] text-gray-800">Escape Rooms</a>
          <a href="#" className="text-xs pt-[10px] text-gray-800">About Us</a>
        </div>
        <button className="bg-orange-600 hover:bg-orange-800 text-white px-10 py-2 rounded-md text-sm font-semibold">
          Get a Quote
        </button>
      </div>

      {/* Hero Text */}
      <div className="absolute left-6 md:left-16 bottom-0 transform -translate-y-1/2 text-white">
        <p className="text-lg md:text-xl font-light">An epic</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Scavenger Hunt<br />
          in San Francisco
        </h1>
      </div>
    </div>
    </>
  )
}

export default App
