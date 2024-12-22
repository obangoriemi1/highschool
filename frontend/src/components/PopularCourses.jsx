
import english from '../assets/images/english.jpg'
import dha_anywaa from '../assets/images/dha_anywaa.jpg'
import javascript from '../assets/images/javascript.jpg'
import physics from '../assets/images/physics.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { MdOutlineLock } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";
const PopularCoureses = ()=> {

  const popularCourseList = [
    {
    title: "English",
    hours: "6 hours",
    description: "Master the essentials of the English language with this comprehensive course. Designed for learners of all levels, it covers grammar, vocabulary, pronunciation, and communication skills.",
    availability: "Free",
    level: "Beginner"
  },
    {
    title: "Dha Anywaa",
    hours: "4 hours",
    description: "Learn the fundamentals of Dha Anywaa, the language of the Anywaa people. This course covers essential vocabulary, grammar, pronunciation, and everyday conversation skills.",
    availability: "Free",
    level: "Beginner"
  },
    {
    title: "Javascript",
    hours: "3 hours",
    description: "Master the fundamentals of JavaScript, the programming language of the web. This course covers essential topics, empowering you to create dynamic and interactive web applications.",
    availability: "Free",
    level: "Beginner"
  },
]

const images = [
  english,
  dha_anywaa,
  javascript,
]

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


    return (<div>
          <hr />

        <h1 className='font-semibold text-2xl pt-5'>Popular Courses</h1>


        <div className='flex gap-5 '>

          
          
          
             <motion.div className="flex flex-wrap gap-1 pt-5 w-full flex-col md:flex-row justify-around" 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
             >
                {
                  popularCourseList.map((item, index)=> {
                    return (  <motion.div variants={itemVariants} key={item.title} className="relative h-auto border-b dark:border-[#2a9df4] border-teal-800  md:w-[27%] light:bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                     
                    >
                      <img src={images[index]} alt="english course" className="w-full h-52 object-cover" />
                      <div className="p-4">
                        <div className='top-5 p-[3px] absolute bg-teal-800 bg-opacity-60'>
                          <h2 className='text-white text-lg font-semibold'>{item.level}</h2>
                        </div>
                        <h3 className="font-semibold text-lg light:text-gray-800 dark:hover:text-[#2a9df4]  hover:text-teal-800 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="italic dark:text-gray-300 text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <div className='flex pb-2 pl-5 gap-5'>
                      <span className='flex items-center gap-2'><MdAccessTime size={20} />{item.hours}</span>
                      <span className='flex items-center gap-2'><MdOutlineLock size={20} /> {item.availability}</span>
                      </div>
                    </motion.div>)
                  })
                } 
            </motion.div>
            
            
        </div>

        <div className='flex gap-2  mt-10 justify-between items-center'>
            <div className='w-[48%] h-[1px] bg-slate-400'></div> 
            <Link>
                <NavLink to={'/courses'}>
                <div className=' flex justify-center gap-5 items-end border dark:border-[#2a9df4] border-teal-800 p-2 dark:hover:text-[#2a9df4] hover:text-teal-800'>Explore <span><IoIosArrowDown /></span> </div>
                
                </NavLink>
            </Link>
              <div className='w-[48%] h-[1px] bg-slate-400'></div>
        </div>

    </div>)
}

export default PopularCoureses;