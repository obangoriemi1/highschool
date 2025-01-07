import oriemi from '../assets/images/oriemi_profile.jpg'
import kuch from '../assets/images/kuch.jpg'
import { motion } from "framer-motion";



const Instructor = ()=> {

        

  const imageList = [
    oriemi,
    kuch
  ]


    const instructorList = [
      {
        name: 'Oriemi Obang',
        description: 'A top student in high school and now a passionate software engineering student at Haramaya University with a strong background in mobile app development and web development.',
      },
      {
        name: 'Kuch Obang',
        description: 'I am a curious and adaptable thinker, eager to explore and learn. Ready to help and guide you through your course. I aim to make complex ideas simple and accessible to all.',
      },

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

    return (
    <div className='mt-10 flex-col'>
      
        <h1 className='font-semibold text-2xl pt-5'>Instructors</h1>
        <p className='italic'>Instructors are responsible for teaching students and providing guidance on learning.</p>
        <p className='italic'>Some of the instructors at ATSa E-Learning High School include:</p>

  <motion.div className="flex flex-wrap gap-10 pt-5 w-full flex-col md:flex-row" 
   variants={containerVariants}
   initial="hidden"
   animate="visible"
  >

    {instructorList.map((instructor, index) =>{
      return (  <motion.div  key={index}  variants={itemVariants} className="relative h-auto md:w-[27%] border-b dark:border-[#2a9df4] border-teal-800   bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img src={imageList[index]} alt="Instructor Oriemi" className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg dark:text-gray-100 text-gray-800 hover:text-teal-800 dark:hover:text-blue-600 transition-colors duration-200">
            {instructor.name}
          </h3>
          <p className="italic dark:text-gray-300 text-gray-600 text-sm">
            {
              instructor.description
            }
          </p>
        </div>
      </motion.div>
    )
    })}
</motion.div>

     
    </div>
    )
}

export default Instructor;