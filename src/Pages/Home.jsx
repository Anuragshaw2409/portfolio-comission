import React from 'react'
import Hero from '../Components/Hero'
import Education from '../Components/Education'
import Experience from '../Components/Experience'

function Home() {
    return (
        <div className=''>
            <Hero/>
            <div className=' spacer w-full h-11'></div>
            <Education/>
            <Experience/>


        </div>
    )
}

export default Home