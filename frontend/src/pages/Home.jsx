import React from 'react'
import { assets } from '../assets/assets'
import Instructor from '../components/Instructor';
import PopularCoureses from '../components/PopularCourses';



const Home = () => {
  return (
<div>
<div className="flex flex-col md:flex-row flex-wrap bg-lime-50 rounded-lg px-6 md:px-10 lg:px-20">
    {/* left side */}
    <div className="md:w-1/2 flex  flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]"> 
      <p className='text 3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight '>Welcome to ATSA <br/>We are Smart Brains</p>
      <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
        <img className='w-32 rounded-full' src={assets.school} alt="" />
        <p>Simply browse through our extensive list of courses,<b className='hidden sm:block'r/> tought by experience instructors</p>

      </div>
    </div>
    {/* right side */}
    <div className="md:w-1/2 relative">
    <img className='w-96 md:absolute bottom-0 h-auto rounded-lg ' src={assets.robot} alt="" />
    </div>
    
  </div>

  <PopularCoureses/>
<Instructor/>
</div>


  )
}

export default Home