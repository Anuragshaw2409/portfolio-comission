import React from 'react'
import hero_image from '../assets/hero_image.png'

function Hero() {
  return (
    <div className='mt-16 grid grid-cols-1 md:grid-cols-2 border-b-2 pb-[10%] border-violet-900'>
        <div className='flex flex-col gap-4 md:text-left text-center mb-6'>
            <h1 className='text-white text-6xl font-thin'>Hi, I am </h1>
            <h1 className='text-white text-7xl font-thin '>Dr. Pradeep Kothiyal</h1>
            <h2 className='text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident dignissimos voluptatibus, exercitationem neque maxime! Et accusamus commodi quisquam. Culpa velit laboriosam illum quidem, tempora eum sit praesentium itaque ullam officia tempore, necessitatibus consectetur, accusantium rerum soluta blanditiis? Sint repellendus reiciendis vel iusto voluptatem enim tempora quae nesciunt fuga necessitatibus?</h2>
        </div>
        <div className='flex justify-center ' > 
            <img src={hero_image} alt="" className='w-96 rounded-3xl shadow-violet-900 shadow-2xl' title='Dr. Pradeep Kothiyal'/>
        </div>
    </div>
  )
}

export default Hero