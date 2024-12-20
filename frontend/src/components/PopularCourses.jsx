
import english from '../assets/images/english.jpg'
import dha_anywaa from '../assets/images/dha_anywaa.jpg'
import javascript from '../assets/images/javascript.jpg'
import physics from '../assets/images/physics.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { MdOutlineLock } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
const PopularCoureses = ()=> {

    return (<div>
          <hr />

        <h1 className='font-semibold text-2xl pt-5'>Popular Courses</h1>


        <div className='flex gap-5 '>
          
             <div className="flex flex-wrap gap-10 pt-5 w-full flex-col md:flex-row justify-around">
              <div className="relative h-auto border-b border-teal-800  md:w-[27%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img src={english} alt="english course" className="w-full h-52 object-cover" />
                <div className="p-4">
                  <div className='top-5 p-[3px] absolute bg-teal-800 bg-opacity-60'>
                    <h2 className='text-white text-lg font-semibold'>Begginer</h2>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-teal-800 transition-colors duration-200">
                    English
                  </h3>
                  <p className="italic text-gray-600 text-sm">
                  Master the essentials of the English language with this comprehensive course. Designed for learners of all levels, it covers grammar, vocabulary, pronunciation, and communication skills.
                  </p>
                </div>
                <div className='flex pb-2 pl-5 gap-5'>
                <span className='flex items-center gap-2'><MdAccessTime size={20} /> 6 hours</span>
                <span className='flex items-center gap-2'><MdOutlineLock size={20} /> Free</span>
                </div>
              </div>
            
              <div className="relative h-auto border-b border-teal-800 lg:w-[23%] md:w-[27%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img src={dha_anywaa} alt="Instructor Oriemi" className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-teal-800 transition-colors duration-200">
                    Dha Anywaa
                  </h3>
                  <div className='top-5 p-[3px] absolute bg-teal-800 bg-opacity-60'>
                    <h2 className='text-white text-lg font-semibold'>Begginer</h2>
                  </div>
                  <p className="italic text-gray-600 text-sm">
                  Learn the fundamentals of Dha Anywaa, the language of the Anywaa people. This course covers essential vocabulary, grammar, pronunciation, and everyday conversation skills. 
                     </p>
                </div>
                <div className='flex pb-2 pl-5 gap-5'>
                <span className='flex items-center gap-2'><MdAccessTime size={20} /> 4 hours</span>
                <span className='flex items-center gap-2'><MdOutlineLock size={20} /> Free</span>
                </div>
              </div>

              {/* <div className="relative h-auto w-[27%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img src={physics} alt="Instructor Oriemi" className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200">
                     Physics
                 </h3>
                  <p className="italic text-gray-600 text-sm">
                  Explore the fascinating world of physics with this comprehensive course. Dive into key concepts like motion, energy, forces, and waves, and understand how they shape the universe. With practical examples and real-world applications, this course is perfect for students and enthusiasts looking to build a strong foundation in physics and its principles.                               </p>
                </div>
              </div> */}

              <div className="relative h-auto border-b border-teal-800 md:w-[27%] lg:w-[23%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img src={javascript} alt="Instructor Oriemi" className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 hover:text-teal-800 transition-colors duration-200">
                     JavaScript
                 </h3>
                 <div className='top-5 p-[3px] absolute bg-teal-800 bg-opacity-60'>
                    <h2 className='text-white text-lg font-semibold'>Intermiadate</h2>
                  </div>
                  <p className="italic text-gray-600 text-sm">
                  Master the fundamentals of JavaScript, the programming language of the web. This course covers essential topics, empowering you to create dynamic and interactive web applications.
                  
                </p>
                </div>
                <div className='flex pb-2 pl-5 gap-5'>
                <span className='flex items-center gap-2'><MdAccessTime size={20} /> 6 hours</span>
                <span className='flex items-center gap-2'><MdOutlineLock size={20} /> Free</span>
                </div>
              </div>
              
            </div>
            
            
        </div>

        <div className='flex gap-2  mt-10 justify-between items-center'>
            <div className='w-[48%] h-[1px] bg-slate-400'></div> 
            <Link>
                <NavLink to={'/courses'}>
                <div className=' flex justify-center gap-5 items-end border border-teal-800 p-2 hover:text-teal-800'>Explore <span><IoIosArrowDown /></span> </div>
                
                </NavLink>
            </Link>
              <div className='w-[48%] h-[1px] bg-slate-400'></div>
        </div>

    </div>)
}

export default PopularCoureses;