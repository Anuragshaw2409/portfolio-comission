import React from 'react'
import { experience } from '../ExperienceConst'

function Timeline() {
    return (
        <>
            <div className='text-white  w-full md:flex justify-center flex-col items-center hidden'>


                {experience.map((ex, index) => {
                    return (
                        <>
                            <Circle />
                            <div key={index} className='grid grid-cols-[1fr_auto_1fr] items-center  mb-2 content-center' >

                                {index % 2 == 0 ? <div className='flex justify-end'><Card organization={ex.organizaion} post={ex.post} duration={ex.duration} /></div> : <div></div>}
                                <Pillar />
                                {index % 2 != 0 ? <Card organization={ex.organizaion} post={ex.post} duration={ex.duration} /> : <div></div>}

                            </div>

                        </>
                    )
                })}
            </div>

            <div className='text-white  w-full flex justify-center flex-col items-start md:hidden'>
                {experience.map((ex, index) => {
                    return (
                        <>
                            <Circle />
                            <div key={index} className='' >

                                <div className='grid grid-cols-[auto_1fr] gap-2 mb-2 '>
                                    <Pillar />
                                    <Card organization={ex.organizaion} post={ex.post} duration={ex.duration} />
                                    

                                    </div>



                            </div>

                        </>
                    )
                })}

            </div>

        </>
    )
}


function Circle() {
    return (
        <div className='w-4 h-4 rounded-full bg-violet-700 flex justify-center items-center mb-3'>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

        </div>
    )
}

function Pillar() {
    return (
        <>
            <div className="w-4 h-full py-1 bg-violet-700 mb-2 rounded-t-full rounded-b-full flex justify-center items-center">
                <div className="w-2 h-full bg-yellow-400 rounded-t-full rounded-b-full"></div>
            </div>
        </>
    )
}

function Card({ organization, post, duration }) {
    return (
        <div className="Card w-full md:min-w-96 md:w-3/4 h-full bg-violet-700 flex flex-col text-white p-2 rounded-xl border-2 border-yellow-400 mx-1 shadow-lg shadow-violet-900 hover:-translate-x-2 hover:-translate-y-2 transition-transform">
            <div className=""><h1 className='md:text-xl font-bold text-lg'>{post}</h1></div>
            <div><h2 className='md:text-lg font-semibold '>{organization}</h2></div>
            <div className="md:text-base text-sm"><p className='text-'>{duration}</p></div>




        </div>
    )
}
export default Timeline