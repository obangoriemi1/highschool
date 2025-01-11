import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { CgCompress } from "react-icons/cg";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { FaCompressArrowsAlt } from 'react-icons/fa';
import math from '../assets/course_images/maths.pdf'
import React, { useRef } from "react";
import { MdZoomInMap } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Course = ()=> {

  const [hideBar, setHideBar] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const handleBar = ()=> {
    setHideBar(!hideBar)
  }

  const containerRef = useRef(null);

  const handleFullScreen = () => {
      if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
          // Safari
          containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
          // IE/Edge
          containerRef.current.msRequestFullscreen();
      }

     setIsFullScreen(true)
  };


  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
    }

    setIsFullScreen(false)
};



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

   
        const [isExpanded, setIsExpanded] = useState(false);
          const [expandedCourse, setExpandedCourse] = useState(null);
           const [subTopicsVisible, setSubTopicsVisible] = useState(null);
           
           const toggleExpand = (index) => {
             // Toggle the expanded state for the selected course
             setExpandedCourse((prev) => (prev === index ? null : index));
           };
           
           const toggleSubTopics = (index) => {
             // Toggle the visibility of subtopics for a specific topic
             setSubTopicsVisible((prev) => (prev === index ? null : index));
             setIsExpanded(!isExpanded)
        
           };
    


    return (<div className="flex justify-between gap-1">
         <div className= { hideBar? 'hidden transition-all':  "hidden md:block md:w-[30%] pb-10  border-[1px] border-gray-300 h-screen  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"  } 
                
  >
            <div className="flex font-semibold text-xl dark:text-gray-100 justify-between border-b bottom-[1px]  border-gray-200">
                <div className="w-[50%] flex justify-center items-center border-r p-5 bottom-[2px] border-gray-100 dark:border-b-[#2a9df4] border-b-teal-800 border-b-2 text-nowrap" >Course Outline</div>
                <div className="w-[50%] flex justify-center items-center p-5">Resourse</div>
            </div>

            {courseList.map((course, index) => {
        return (
          <motion.div
            key={course.title}
            className=" border-b-[1px] border-gray-300 p-4  w-full cursor-pointer"
            whileTap={{ scale: 0.98 }}
          >
            {/* Leading Section */}
            <div className="flex items-center justify-between" onClick={() => toggleExpand(index)}>
              <div className="flex justify-center items-center rounded-full border-2 h-14 w-14 dark:border-[#2a9df4] border-teal-800">
                <div className="flex justify-center items-center rounded-full border-[1px] h-10 w-10 dark:border-[#2a9df4] border-teal-800">
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
                {expandedCourse === index ? <div className="dark:bg-gray-700 bg-gray-200 p-1"><FaChevronUp size={15} /></div> : <div className="dark:bg-gray-700 bg-gray-200 p-1"><FaChevronDown size={15} /></div>}
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
                      {subtitle.subTopic && subtitle.subTopic.length > 0 && (
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
                              {subtitle.subTopic.map((sub, subIdx) => (
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
         <div  ref={containerRef} className= {hideBar? 'md:w-full w-full h-screen border-[1px]  border-gray-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent': "md:w-[70%] w-full h-screen border-[1px]  border-gray-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"}>
         <div className={`fixed rounded-sm ${isFullScreen? `left-0`:hideBar? `left-15`: `left-[32.3%]`}  top-[50%] dark:text-[#2a9df4] text-teal-800  p-1 border-t-2 border-r-2 border-b-2 border-teal-800 dark:border-[#2a9df4]`}>
         <FaAngleLeft size={30} />
            </div>
            <div className={isFullScreen?"fixed rounded-sm right-0 top-[50%] dark:text-[#2a9df4] text-teal-800  p-1 border-t-2 border-l-2 border-b-2 border-teal-800 dark:border-[#2a9df4]" :"fixed rounded-sm right-[6%] top-[50%] dark:text-[#2a9df4] text-teal-800  p-1 border-t-2 border-l-2 border-b-2 border-teal-800 dark:border-[#2a9df4]"}>
            <FaAngleRight size={30} />
            </div>
            <div className=" flex justify-between">

            


                <div className="flex gap-2 items-center pt-2 px-3 ">
                     <div><MdOutlineMenuOpen onClick={handleBar} size={30} /></div> 
                    <p className="text-xl">Introduction to grade 9 maths</p>
                </div>
               {!isFullScreen &&  <div><AiOutlineExpandAlt onClick={handleFullScreen} size={30} /></div>}

            </div>

            <div className="w-full">
            <iframe className="w-full h-96"   src="https://www.youtube.com/embed/_FSXJmESFmQ?si=oFkKxI3toIa61FtD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            {isFullScreen && <div onClick={handleExitFullScreen} className="p-3 text-white fixed  rounded-full shadow-lg  right-28 bottom-20 dark:bg-[#2a9df4] bg-teal-800">
              <MdZoomInMap  size={40} />
              </div>}
            <div>
            <iframe src={math} allowFullScreen width="100%" height="600px"></iframe>

           

            </div>


           
         </div>
         </div>)
}

export default Course;