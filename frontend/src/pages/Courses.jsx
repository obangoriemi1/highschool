// 
// import { assets } from '../assets/assets'

import { Link, NavLink } from "react-router-dom"
import { PiSquaresFour } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import math_9 from '../assets/course_images/maths9.jpg'
import math_10 from '../assets/course_images/math10.jpg'
import math_11 from '../assets/course_images/maths11.jpg'
import math_12 from '../assets/course_images/maths12.jpg'
import { MdOutlineLock } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";


const courseList = [
  {
  id: 1,
  title: 'Mathematics for Grade 9',
  image: math_9,
  decription: 'Mathematics for Grade 9 focuses on building a strong foundation in algebra, geometry, and statistics. Students explore concepts like linear equations, quadratic functions, and geometric reasoning to enhance critical thinking skills. These topics prepare learners for advanced math studies and real-world applications.',
  instructor: 'Oriemi Obang',
  accessibility: 'Free',
  time: '12 hours',
  level: 'Intermiadate'


},
  {
  id: 2,
  title: 'Mathematics for Grade 10',
  image: math_10,
  decription: 'Mathematics for Grade 10 emphasizes advanced algebra, trigonometry, and introductory calculus. Students develop problem-solving skills by exploring quadratic equations, trigonometric functions, and coordinate geometry, preparing for higher-level concepts.',
  instructor: 'Oriemi Obang',
  accessibility: 'Free',
  time: '10 hours',
  level: 'Intermiadate'

},
  {
  id: 1,
  title: 'Mathematics for Grade 11',
  image: math_11,
  decription: 'Grade 11 Mathematics dives deeper into functions, sequences, and advanced trigonometry. Students also study probability, statistics, and introductory calculus, laying the groundwork for critical thinking and real-world applications.',
  instructor: 'Oriemi Obang',
  accessibility: '$12',
  time: '20 hours',
  level: 'Advanced'

}
]

const Courses = () => {
  return (
    <div>
      <div className='flex items-center'>
        <Link> 
         <NavLink to={'/'}>
        <h1 className="flex font-semibold gap-1 items-center text-black">Home <span className="flex items-center"><IoIosArrowForward size={18} /></span></h1>

        </NavLink> 
        </Link>
    

        <h1 className="text-gray-800">Learning Catalog</h1>
      </div>
     

<div className='flex gap-3 justify-between flex-col md:flex-row mt-14 items-start'>
       {/* <div className="flex flex-col items-center mt-9 lg:mt-5">
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
   </div> */}


        <div className='md:w-[30%] w-full  h-full'>
        <h1 className='text-gray-800 text-2xl font-semibold'>Learning Catalog</h1>
          <h1  className='flex gap-3 text-xl font-semibold text-gray-800 mt-5'><span><PiSquaresFour size={30} /></span> Subjects</h1>
          <div>
            <hr className='mt-2'></hr>
            <ul className='mt-6 flex flex-col gap-3 text-gray-700 text-lg'>
              
             
              <li>Language</li>
              <li>Programming</li>
              <li className="bg-teal-800 text-white font-semibold p-1">Mathematics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Physics</li>


            </ul>

          </div>

        </div>
        <div className='md:w-[70%] w-full  h-full'>
          <h1 className="md:text-3xl text-2xl">Mathematics</h1>
          <p className="mt-3">A comprehensive list of math courses covering fundamental and advanced concepts for analytical and problem-solving skills.</p>
          <div className="flex gap-2 mt-5 items-center">
            <h1 className="text-xl">Courses</h1>
            <div className="w-[2px] h-[19px] bg-gray-900"></div>
            <h1 className="text-teal-800 text-xl font-semibold cursor-pointer">View All</h1>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:flex-wrap justify-between mt-9">
  {
    courseList.map((course) => {
      return (
        <div className="relative h-auto border-b border-teal-800 md:w-[27%] lg:w-[30%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={course.image} alt="Instructor Oriemi" className="w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-800 hover:text-teal-800 transition-colors duration-200">
              {course.title}
            </h3>
            <div className="top-5 p-[3px] absolute bg-teal-800 bg-opacity-60">
              <h2 className="text-white text-lg font-semibold">{course.level}</h2>
            </div>
            <p className="italic text-gray-600 text-sm">
              {course.decription}
            </p>
          </div>
          <div className="flex pb-2 pl-5 gap-5">
            <span className="flex items-center gap-2"><MdAccessTime size={20} /> {course.time}</span>
            <span className="flex items-center gap-2"><MdOutlineLock size={20} /> {course.accessibility}</span>
          </div>
        </div>
      );
    })
  }
</div>

        </div>
    </div>
    </div>
  )
}

export default Courses