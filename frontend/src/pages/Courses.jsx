// 
// import { assets } from '../assets/assets'

import { Link, NavLink } from "react-router-dom"
import { PiSquaresFour } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import math_9 from '../assets/course_images/maths9.jpg'
import math_10 from '../assets/course_images/math10.jpg'
import math_11 from '../assets/course_images/maths11.jpg'
import math_12 from '../assets/course_images/maths12.jpg'
import englishImge from '../assets/course_images/learn_english.jpg'
import amharciImage from '../assets/course_images/amharic.jpg'
import dhaAnywaaImage from '../assets/course_images/dha_anywaa.jpg'
import { MdOutlineLock } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import chemo9 from '../assets/course_images/chemo9.jpg'
import chemo10 from '../assets/course_images/chemo10.jpg'
import chemo11 from '../assets/course_images/chemo11.jpg'
import bio9 from '../assets/course_images/bio9.jpg'
import bio10 from '../assets/course_images/bio10.jpg'
import bio11 from '../assets/course_images/bio11.jpg'
import phy9 from '../assets/course_images/phy9.jpg'
import phy10 from '../assets/course_images/phy10.jpg'
import html from '../assets/course_images/html.jpg'
import css from '../assets/course_images/css.jpg'
import javasc from '../assets/course_images/javasc.jpg'
import phy11 from '../assets/course_images/phy11.jpg'







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

const Language  =[
  englishImge,
  dhaAnywaaImage,
  amharciImage
]

const Mathematics = [
  math_9,
  math_10,
  math_11
]
const Chemistry = [
  chemo9,
  chemo10,
  chemo11
]
const Biology = [
  bio9,
  bio10,
  bio11
]
const Physics = [
  phy9,
  phy10,
  phy11
]
const Programming = [
  html,
  css,
  javasc
]


const subjectList = [
  'Language',
  'Mathematics',
  'Chemistry',
  'Biology',
  'Physics',
  'Programming'
]






const Courses = () => {
  const [courseData, setCourseData] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [currentSubject, setCurrentSubject] = useState("Language")

  const fetchData = (subject)=> {
    const path =`/api/course/${subject}`
    //http://localhost:3000/api/course/language
    console.log(path)
    fetch(path)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching subject data');
        }
        return response.json();
    })
    .then(data => {
        setCourseData(data)
        console.log(data)
        setLoading(false);
    })
    .catch(err => {
        setError(err.message);
        setLoading(false);
    });
  }

  useEffect(()=> {
    fetchData("language")
  }, [])

  if (loading) {
    return (<div>Loading...</div>);
  }
  
  if (error) {
    return (<div>Error: {`error here ${error}`}</div>);
  }


 const handleSubject = (subject)=>{
  setCurrentSubject(subject)

  const data = subject.toLowerCase()
   fetchData(data)

  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };


  


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
     

<div className='flex gap-3 justify-between flex-col md:flex-row lg:mt-5 xl:mt-8 items-start'>
        <div className='md:w-[30%] w-full  h-full'>
        <h1 className='text-gray-800 text-2xl font-semibold'>Learning Catalog</h1>
          <h1  className='flex gap-3 text-xl font-semibold text-gray-800 mt-5'><span><PiSquaresFour size={30} /></span> Subjects</h1>
          <div>
            <hr className='mt-2'></hr>
            <ul className='mt-6 flex flex-col gap-3 text-gray-700 text-lg'>
              
            {
              //bg-teal-800 text-white font-semibold p-1
            subjectList.map((subject)=> {
              return (
                <li className={currentSubject === subject? "bg-teal-800 text-white font-semibold p-1 cursor-pointer":"cursor-pointer hover:bg-teal-700 hover:text-white"} onClick={()=>handleSubject(subject)} >{subject}</li>
              )
            })}
            </ul>
          </div>
        </div>
        <div className='md:w-[70%] w-full  h-full'>
          <h1 className="md:text-3xl text-2xl">{courseData.title}</h1>
          <p className="mt-3">{courseData.description}</p>
          <div className="flex gap-2 mt-5 items-center">
            <h1 className="text-xl">Courses</h1>
            <div className="w-[2px] h-[19px] bg-gray-900"></div>
            <h1 className="text-teal-800 text-xl font-semibold cursor-pointer">View All</h1>
          </div>

          <motion.div key={courseData.title} className="flex flex-col gap-1 md:flex-row md:flex-wrap mt-9  w-full" 
          // initial={{ opacity: 0.1, y: index + 55 }} 
          // whileInView={{ opacity: 1, y: 0 }} 
          // transition={{ duration: 1.5 }}
          // viewport={{ once: false }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          >
  {
    courseData.courses.map((course, index) => {
    
      let imageList = []
      if(`${courseData.title}` === subjectList[0]){
        imageList = Language
        console.log(imageList)
      } else if(`${courseData.title}` === subjectList[1]){
        imageList = Mathematics
        console.log(imageList)
      } else if(`${courseData.title}` === subjectList[2]){
        imageList = Chemistry
        console.log(imageList)
      } else if(`${courseData.title}` === subjectList[3]){
        imageList = Biology
        console.log(imageList)
      } else if(`${courseData.title}` === subjectList[4]){
        imageList = Physics
        console.log(imageList)
        console.log(imageList)
      } else  if(`${courseData.title}` === subjectList[5]){
        imageList = Programming
        console.log(imageList)
      }

      const imag = course.title
      
      console.log(courseData.title === subjectList[index])
      return (
    
       
     
          <motion.div variants={itemVariants} className="relative h-auto border-b cursor-pointer border-teal-800 md:w-[27%] lg:w-[32.9%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
       
       >
         <NavLink className="lg:w-[40%]" to={'/course-info'}>
         <img src={imageList[index]} alt="Instructor Oriemi" className="w-full h-52 object-cover" />

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
         </NavLink>
       </motion.div>
      
        
        
    
      );
    })
  }
</motion.div>

        </div>
    </div>
    </div>
  )
}

export default Courses