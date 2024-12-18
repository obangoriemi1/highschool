
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Courses = () => {
  return (
    <div>
       <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
      Learn From Smart Brains.
    </h1>
    <p className='mt-10 text-center max-w-4xl'>Empower yourself, get started today and turn your imagination into immersive reality!</p>
    <div className="flex justify-center my-10">
      <Link className='bg-black text-white py-3 px-4 mx-3 rounded-md'>Start for free</Link>
      <Link className='bg-black text-white py-3 px-4 mx-3 rounded-md'>Documentation</Link>
    </div>
    <div className="lg:flex  items-center mt-5  gap-4">
    <div className="w-52 h-32 border border-teal-900 flex items-center text-center justify-center m-2 hover:bg-teal-800 hover:text-white cursor-pointer">
        <Link to={"/highschool"} className='font-bold'>High School</Link>
    </div>
    <div className="w-52 h-32 border border-teal-900 flex items-center text-center justify-center m-2  hover:bg-teal-800 hover:text-white cursor-pointer">
       <Link to={"/computer"} className='font-bold'>Computer</Link>
    </div>
    
    </div>
   </div>
    </div>
  )
}

export default Courses