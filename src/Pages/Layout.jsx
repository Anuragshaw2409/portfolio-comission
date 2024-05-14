import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function Layout() {
  return (
    <>
    <Navbar/>
    <div className="fixed top-0 left-0 h-screen w-screen -z-10">

                <div className="relative h-full w-full bg-slate-950">

                    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
                    </div>
                    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
                    </div>
                </div>
            </div>

            <div className='w-[90%] absolute left-[50%] -translate-x-[50%] selection:text-slate-700 selection:bg-cyan-300'>
            <Outlet/>

            </div>
    </>
  )
}

export default Layout