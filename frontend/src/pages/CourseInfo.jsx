import { Link, NavLink } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import atsa from '../assets/images/atsa-logo.png';
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import math_9 from '../assets/course_images/maths9.jpg'
import { IoIosUnlock } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { HiMiniChartBar } from "react-icons/hi2";
import { ImLab } from "react-icons/im";





const CourseInfo = ()=> {

  const courseList = [
    {
      id: '1',
      title: "Course introduction",
      topic: [
        {
          title: "About the course",
          subTopic: []

        },
        {
          title: "Resources"
        }
      ]
    }
    ,
    {
      title: "Unit 1: The number system",
      topic: [
        {
          title: "Revision on the set of rational number",
          subTopic: [
            {
          
              title: 'The number system'
            },
            {
              title: 'Common factor and common multiple'
            },
            {
              title: 'Rational number'
            }

          ]

        },
        {
          title: "The real number system",
          subTopic: [
            {
          
              title: 'The number system'
            },
            {
              title: 'Common factor and common multiple'
            },
            {
              title: 'Rational number'
            }

          ]

        }
      ]


    }
   
    ,
    {
      title: "Unit 1: The number system",topic: [
        {
          title: "Revision on the set of rational number",
          subTopic: [
            {
              title: 'The number system'
            },
            {
              title: 'Common factor and common multiple'
            },
            {
              title: 'Rational number'
            }

          ]

        },
        {
          title: "The real number system",
          subTopic: [
            {
          
              title: 'The number system'
            },
            {
              title: 'Common factor and common multiple'
            },
            {
              title: 'Rational number'
            }

          ]

        }
      ]


    }
   
    ,
    {
      title: "Unit 1: The number system",
      topic: [
        {
         
          title: "Revision on the set of rational number",
          subTopic: [
            {
              title: 'The number system'
            },
            {
              title: 'Common factor and common multiple'
            },
            {
              title: 'Rational number'
            }
          ]

        },
        {
          title: "The real number system",
          subTopic: [
            {
          
              title: 'The number system'
            },
            {
              title: 'Common factor and common multiple'
            },
            {
              title: 'Rational number'
            }

          ]

        }
      ]


    }
   
  
  ]

  const [selectedLanguage, setSelectedLanguage] = useState('Dha Anywaa')
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [subTopicsVisible, setSubTopicsVisible] = useState(null);
  const [courseData, setCourseData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
    
      const fetchData = (course)=> {
        const path =`/api/course/subject/${course}`
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
        fetchData(localStorage.getItem('course'))
      }, [])
    
      if (loading) {
        return (<div>Loading...</div>);
      }
      
      if (error) {
        return (<div>Error: {`error here ${error}`}</div>);
      }
    
    
  

  const handleLanguage = (e) => {
    console.log(e.target.value)
    setSelectedLanguage(e.target.value)
  }



   
   const toggleExpand = (index) => {
     // Toggle the expanded state for the selected course
     setExpandedCourse((prev) => (prev === index ? null : index));
   };
   
   const toggleSubTopics = (index) => {
     // Toggle the visibility of subtopics for a specific topic
     setSubTopicsVisible((prev) => (prev === index ? null : index));
     setIsExpanded(!isExpanded)

   };
 
    return (
        <div className="">
        <div className='flex items-center'>
        <Link> 
         <NavLink to={'/courses'}>
        <h1 className="flex font-semibold gap-1 items-center dark:text-white text-black">Catalog <span className="flex items-center"><IoIosArrowForward size={18} /></span></h1>
        </NavLink> 
        </Link>
        <h1 className="text-gray-800 dark:text-gray-300">Mathematics </h1>
      </div>

      <div className=" flex flex-col-reverse gap-2 md:flex-row">
      {//  the first row with detail of the course 
      }
        <div className="w-full md:w-[70%] pt-3 ">
          <div className="flex gap-2">
            <img className=" h-12 w-28" src={atsa}></img>
            <div className="w-[1px] h-12 bg-gray-700"></div>
            
            <div className=" h-12 flex justify-center items-center w-28 border border-l-8 bottom-2 dark:border-[#2a9df4] border-teal-800 rounded-md">Course</div>
          </div>

          <h1 className="text-2xl md:text-4xl py-3">{courseData.title}</h1>
          <p className="pb-2">{courseData.short_description}</p>
          <select value={selectedLanguage} onChange={handleLanguage}  className="w-64 p-1 dark:bg-transparent  border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800 dark:focus:ring-blue-500">
            <option  value="Dha anywaa" className="dark:bg-slate-900 dark:text-white bg-white text-black">Dha anywaa</option>
            <option value="English" className="dark:bg-slate-900 dark:text-white bg-white text-black">English</option>
            <option value="Amharic" className="dark:bg-slate-900 dark:text-white bg-white text-black">Amharic</option>
          </select>
          <h3 className="font-semibold text-gray-500 py-2">AVAILABLE LANGUAGES</h3>
          <p className="italic">Dha anywaa, english, amharic</p>

          <div className="flex gap-5 pt-3 border-b-[1px]  items-center p-4 border-gray-300">
            <h2 className="text-slate-600 dark:text-gray-300 font-semibold text-2xl">Overview</h2>
            <div className="w-[2px] h-5 bg-gray-400"></div>
            <h2 className="text-slate-600 font-semibold dark:text-gray-300 text-2xl">Cariculum</h2>
          </div>

          <div className="flex flex-col gap-4 py-3 space-x-1 text-[18px] dark:text-gray-200 text-gray-700">
            <p>{courseData.full_description1}</p>

          <p>{courseData.full_description2}</p>
          </div>

          <h1 className="text-2xl md:text-4xl pb-5">Here’s what you will learn.</h1>

    <div className=" flex flex-col gap-3">
    {courseData.unit.map((course, index) => {
        return (
          <motion.div
            key={course.title}
            className="border border-gray-300 rounded-lg p-4 shadow-md w-full cursor-pointer"
            whileTap={{ scale: 0.98 }}
          >
            {/* Leading Section */}
            <div className="flex items-center justify-between" onClick={() => toggleExpand(index)}>
              <div className="flex justify-center items-center rounded-full border-2 h-20 w-20 dark:border-[#2a9df4] border-teal-800">
                <div className="flex justify-center items-center rounded-full border-[1px] h-16 w-16 dark:border-[#2a9df4] border-teal-800">
                  <MdOutlineSubject size={30} />
                </div>
              </div>
              {/* IoIosArrowUp,IoIosArrowDown */}
              <h2 className="flex-1 mx-4 text-lg font-semibold"> { course.title}</h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: expandedCourse === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-teal-800 dark:text-[#2a9df4]"
              >
                {expandedCourse === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
              </motion.div>
            </div>

            {/* Expandable Content */}
            {expandedCourse === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                {/* Iterate over course topics */}
                {course.topic.map((subtitle, idx) => {
                  return (
                    <div key={idx}>
                      <p className="flex gap-1 items-center" onClick={() => toggleSubTopics(idx)}> <span className="rounded-full  border-[1px] border-teal-800 items-center justify-center p-[2px]">{subTopicsVisible === idx? <IoIosArrowUp/>: <IoIosArrowDown/> }</span> {subtitle.title}</p>
                      {subtitle.subtopic && subtitle.subtopic.length > 0 && (
                        <ul
                          className="mt-2 pl-4 list-disc text-gray-600"
                        >
                          {subTopicsVisible === idx &&  (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 pl-4 list-disc dark:text-gray-200 text-gray-600"
                            >
                              {subtitle.subtopic.map((sub, subIdx) => (
                                <li key={subIdx}>{sub.title}</li>
                              ))}
                            </motion.ul>
                          )}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        );
      })}
      </div>

      

        <NavLink to={"/course"}>
        <div className="flex justify-center items-center">
        <div className="font-bold text-xl  mt-10 border-[1px] dark:border-[#2a9df4] hover:text-teal-800 transition cursor-pointer dark:hover:text-[#2a9df4] border-teal-800 p-3 flex justify-center items-center rounded-md shadow-sm">Enroll today</div>
        </div>

            </NavLink>

        </div>
        <div className="w-full md:w-[30%] dark:bg-slate-800 h-screen bg-slate-200 ">
          <img className="h-[50%]" src={math_9}/>
         <div className="sticky top-0">
           <div className="flex gap-4 justify-between px-1 mt-5">
            <div className="flex flex-col gap-2 items-center">
            <IoIosUnlock size={45}/> 
            <p>{courseData.availability}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <FaRegClock size={43}/> 
            <p>{courseData.hours}</p>
            </div>
      
            <div  className="flex flex-col gap-2 items-center">
            <HiMiniChartBar size={43} /> 
            <p>{courseData.level}</p>
            </div>
            <div  className="flex flex-col gap-2 items-center">
            <ImLab size={40}/> 
            <p>Labs</p>

            </div>

          </div>

          <p className="pl-2 font-semibold my-1"><span className="text-gray-400 font-semibold text-xl">Instructor: </span> {courseData.instructor}</p>
         </div>
        </div>
        
      </div>


     
    
        </div>
    )
}

export default CourseInfo;