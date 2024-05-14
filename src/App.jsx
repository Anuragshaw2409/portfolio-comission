import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Awards from './Pages/Awards'
import FDP from './Pages/FDP'
import Guidance from './Pages/Guidance'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/awards',
          element:<Awards/>
        },
        {
          path:'/fdp',
          element:<FDP/>
        },
        {
          path:'/guidance',
          element:<Guidance/>
        }
      ]
    }
  ])

  return (
    <>

    <RouterProvider router ={router}/>

    
    
    
     
    </>
  )
}

export default App
