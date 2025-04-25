import './App.css'
import heroimg from './assets/HeroImage.png'
import herombl from './assets/heroimg.png'

function App() {

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
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-6">
          <div className="flex space-x-2 text-white font-medium">
            <div className="text-white lg:text-3xl text-2xl font-bold px-5 text-gray-900">HANDSTAND</div>
            <div className='hidden md:flex'>
            <a href="#" className="text-sm px-2 pt-[10px] text-gray-700">Company Events</a>
            <a href="#" className="text-sm pt-[10px] text-gray-700">Public Games</a>
            <a href="#" className="text-sm px-2 pt-[10px] text-gray-700">Escape Rooms</a>
            <a href="#" className="text-sm pt-[10px] text-gray-700">About Us</a>
            </div>
          </div>
          <button className="bg-orange-600 hover:bg-orange-800 text-white lg:px-10 lg:py-2 px-3 py-2 rounded-md text-xs font-semibold">
            Get a Quote
          </button>
          <div> 
             <h1> button </h1>
          </div>
        </div>

        {/* Hero Text */}
        <div className="absolute left-6 md:left-16 bottom-0 hidden lg:block transform -translate-y-1/2 text-white">
          <p className="text-xl md:text-xl font-light">An epic</p>
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
