import oriemi from '../assets/images/oriemi_profile.jpg'

const Instructor = ()=> {
    return (
    <div className='mt-10 flex-col'>
      
        <h1 className='font-semibold text-2xl pt-5'>Instructors</h1>
        <p className='italic'>Instructors are responsible for teaching students and providing guidance on learning.</p>
        <p className='italic'>Some of the instructors at ATSa E-Learning High School include:</p>

  <div className="flex flex-wrap gap-10 pt-5 w-full flex-col md:flex-row">
  <div className="relative h-auto md:w-[27%]  bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <img src={oriemi} alt="Instructor Oriemi" className="w-full h-52 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200">
        Oriemi Obang
      </h3>
      <p className="italic text-gray-600 text-sm">
        A top student in high school and now a passionate software engineering student at Haramaya University with a strong background in mobile app development and web development.
      </p>
    </div>
  </div>

  <div className="relative h-auto md:w-[27%] bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <img src={oriemi} alt="Instructor Oriemi" className="w-full h-52 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200">
        Kuch Obang
      </h3>
      <p className="italic text-gray-600 text-sm">
        A passionate software engineering student at Haramaya University with a strong background in mobile app development and web development.
      </p>
    </div>
  </div>
</div>

     
    </div>
    )
}

export default Instructor;