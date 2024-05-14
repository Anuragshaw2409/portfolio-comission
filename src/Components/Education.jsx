import React from 'react'
import b_tech from '../assets/b_tech.png'
import m_tech from '../assets/m_tech.png'
import masters from '../assets/masters.png'
import Tilt from 'react-parallax-tilt'

function Education() {
  return (
    <div className=' w-full pb-32 mb-16 flex flex-col items-center border-b-2 border-violet-900'>
        <h1 className='text-white text-7xl font-thin mb-10 md:mb-6'>Education</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full h-[70%] text-white gap-y-10'> 

        <Tilt>

        <div className='flex justify-center items-center '>
            <div className='w-[90%]  h-auto flex items-center justify-center flex-col rounded-2xl p-1 border-2 border-transparent hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-300'>
                <img src={b_tech} alt="" className='w-[70%]'/>

            <h1 className='text-center text-2xl text-yellow-300'>B.Tech (Industrial production Engineering) </h1>
            <h1 className='text-center '>Dehradun Institute of Technology, Dehradun, Uttarakhand, India</h1>
            </div>

        </div>
        </Tilt>


        <Tilt>

        <div className='flex justify-center items-center'>
            <div className='w-[90%]  h-auto flex items-center justify-center flex-col rounded-2xl p-1 border-2 border-transparent hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-300'>
                <img src={m_tech} alt="" className='w-[70%]'/>
                <h1 className='text-center text-2xl text-yellow-300'>M.Tech (Production)</h1>
                <h1 className='text-center '>G.B.Pant Institute of Engineering & Technology, Pauri Garhwal, Uttarakhand, India</h1>
            </div>
        </div>
        </Tilt>

        <Tilt>

        <div className='flex justify-center items-center'>
            <div className='w-[90%]  h-auto flex items-center justify-center flex-col rounded-2xl p-1 border-2 border-transparent hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-300'>
                <img src={masters} alt="" className='w-[70%]'/>
                <h1 className='text-center text-2xl text-yellow-300'>Ph.D (Nanocomposite materials) </h1>
                <h1 className='text-center '>Uttarakhand Technical University, Dehradun, Uttarakhand, India</h1>
            </div>
        </div>
        </Tilt>
        </div>


    </div>
  )
}

export default Education