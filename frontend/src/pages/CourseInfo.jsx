import { Link, NavLink } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";

const CourseInfo = ()=> {


    return (
        <div>
        <div className='flex items-center'>
        <Link> 
         <NavLink to={'/courses'}>
        <h1 className="flex font-semibold gap-1 items-center text-black">Catalog <span className="flex items-center"><IoIosArrowForward size={18} /></span></h1>
        </NavLink> 
        </Link>
        <h1 className="text-gray-800">Mathematics </h1>
      </div>

      <div className="flex gap-3">
        <div className="w-70 h-full"></div>
        
      </div>


     
    
        </div>
    )
}

export default CourseInfo;