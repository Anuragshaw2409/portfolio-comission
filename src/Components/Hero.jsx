import React from 'react'
import hero_image from '../assets/hero_image.png'

function Hero() {
  return (
    <div className='mt-16 grid grid-cols-1 md:grid-cols-2 border-b-2 pb-[10%] border-violet-900'>
        <div className='flex flex-col gap-4 md:text-left text-center mb-6'>
            <h1 className='text-white text-6xl font-thin'>Hi, I am </h1>
            <h1 className='text-white text-7xl font-thin '>Dr. Pradeep Kothiyal</h1>
            <h2 className='text-white font-thin'>I am a dedicated researcher, educator, and industry professional specializing in nanocomposite materials, manufacturing engineering, and metal matrix nanocomposites. With a Ph.D. from Uttarakhand Technical University, I have contributed extensively to academia and industry, currently serving as an Associate Professor at JB Institute of Technology, Dehradun. My expertise includes AutoCAD, Taguchi Optimization, and RSM, with a strong focus on microstructural evolution and fracture behavior.</h2>
        </div>
        <div className='flex justify-center ' > 
            <img src={hero_image} alt="" className='w-96 rounded-3xl shadow-violet-900 shadow-2xl' title='Dr. Pradeep Kothiyal'/>
        </div>
    </div>
  )
}

export default Hero