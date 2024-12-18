import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import {assets} from "../assets/assets"

const Header = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const[token, setToken] = useState(true)
  return ( 

    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
     <Link to={"/"}> 
     <span className="text-2xl bg-teal-800 text-white p-2 rounded-lg">SmartBrains</span>
     </Link>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to={"/"}>
                <li className='py-1'>Home</li>
                < hr className='border-none outline-none h-0.5 bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={"/courses"}>
                <li className='py-1'>Courses</li>
                < hr className='border-none outline-none h-0.5 bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={"/about"}>
                <li className='py-1'>About</li>
                < hr className='border-none outline-none h-0.5 bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={"/contact"}>
                <li className='py-1'>Contact</li>
                < hr className='border-none outline-none h-0.5 bg-lime-700 w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>

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
            <button onClick={() =>navigate("/sign-in")} className="bg-teal-800 text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
          }
        
        </div>
    </div>
  )
}

export default Header