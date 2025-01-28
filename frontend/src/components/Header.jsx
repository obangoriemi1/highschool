import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import {assets} from "../assets/assets"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';
import { RiCloseLargeFill } from "react-icons/ri";
const Header = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const[token, setToken] = useState(true)
  const [isLight, setIsLight]= useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const element = document.documentElement
  useEffect(()=> {
    switch (theme) {
      case 'dark':
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break;
      case 'light':
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
        break;
      default:
        element.classList.remove("theme")
        break;
    }



  },[theme])



    useEffect(() => {
      if (isOpen) {

        document.body.style.overflow = 'hidden';
      } else {
    
        document.body.style.overflow = 'auto';
      }
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);


  const handleTheme = ()=> {

    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    setIsLight(!isLight)

    

  }



  const handleNav = ()=> {
    setIsOpen(!isOpen)
  }


  // Animation variants for motion.div
  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5 },
    },
  };
  return ( 

    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>

{isOpen && 
      <motion.div
        className="fixed top-20 p-24 left-0 w-full h-40 bg-gray-800 bg-opacity-75 flex items-center justify-center"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <div className="text-white">
        <ul className='flex flex-col items-start gap-5  font-medium'>
        <NavLink onClick={() => { handleNav(); }}  to={"/"}>
                <li className='py-1'>Home</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink onClick={() => {    handleNav(); }}  to={"/courses"}>
                <li className='py-1'>Courses</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink onClick={() => {  handleNav(); }}  to={"/about"}>
                <li className='py-1'>About</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink onClick={() => {   handleNav();  }}  to={"/contact"}>
                <li className='py-1'>Contact</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        </div>
      </motion.div>
    }
     <Link to={"/"}> 
     <span className="text-2xl dark:bg-[#2a9df4] bg-teal-800 text-white p-2 rounded-lg">SmartBrains</span>
     </Link>
      <ul  className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink  to={"/"}>
                <li className='py-1'>Home</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink  to={"/courses"}>
                <li  className='py-1'>Courses</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={"/about"}>
                <li className='py-1'>About</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={"/contact"}>
                <li className='py-1'>Contact</li>
                < hr className='border-none outline-none h-0.5 dark:bg-[#2a9df4] bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>

       <div className="flex">

        <div className="mr-5 md:mr-16" onClick={handleTheme}>
          {!isLight? <MdOutlineLightMode  size={32}/>: <MdOutlineDarkMode size={32} />}
        </div>

       <div className="flex items-center gap-4">
          {
            token ? 
            <div className="flex items-center gap-2 cursor-pointer group relative">
             <img className="rounded-full" src={assets.profile_icon}  alt="" />
               <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                 <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() =>navigate("/profile")} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() =>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                 </div>
               </div>
            </div>
            :
            <button onClick={() =>navigate("/login")} className="bg-teal-800 dark:bg-[#2a9df4] text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
          }
        
        </div>
        <div onClick={()=> setIsOpen(!isOpen)} className="md:hidden pl-4">
       {!isOpen? <GiHamburgerMenu  size={30}/> :<RiCloseLargeFill size={30} />} 
        </div>
       </div>

     
    </div>
  )
}

export default Header