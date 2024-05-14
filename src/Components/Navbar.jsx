import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    

     <div className='w-full flex justify-between px-[5%] mb-4 h-auto min-h-14 antialiased selection:bg-cyan-300 selection:text-slate-700 backdrop-blur-3xl bg-indigo-950 bg-opacity-10 shadow-lg items-center flex-wrap'>
      <h1 className='text-slate-100 font-semibold text-2xl flex-shrink-0'>Dr. Pradeep Kothiyal</h1>
      
      <nav className='text-slate-200'>
        <div className=" hidden md:flex justify-between  gap-8">
          <Navlinks/>
        </div>
        

        <div className="md:hidden text-right">
          <button onClick={()=>setIsOpen(!isOpen)}>
            {isOpen? <AiOutlineClose/>: <CiMenuFries/>}
          </button>
        </div>
       

      </nav>

      {
        isOpen && 
        <div className="flex flex-col md:hidden min-w-72 text-center w-full text-white">
          <Navlinks/>
        </div>
      }


      

    </div>
    
  )
}



export const Navlinks = () => {
  return (
    <>
    
      
      <NavLink to='/' className="hover:text-cyan-600">
        Home
      </NavLink>
      <NavLink className="hover:text-cyan-600" to='/awards'>
        Awards
      </NavLink>
      <NavLink className="hover:text-cyan-600" to='/fdp'>
        FDPs
      </NavLink>
      <NavLink className="hover:text-cyan-600" to='/guidance'>
        M.Tech Guided
      </NavLink>
      
      </>
  )
}


export default Navbar