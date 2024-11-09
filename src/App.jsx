import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path: "/movie-suggestion/",
      element: <Home/>
    },
    {
      path: "/movie-suggestion/categroy",
      element: <Category/>
    },
    {
      path: "/movie-suggestion/movie",
      element: <Movie />,
    },
    {
      path: "/movie-suggestion/about",
      element: <About />,
    },
    {
      path: "/movie-suggestion/actor",
      element: <Actors />,
    },
  ])

  return (
    <>
      <div className='m-0 p-0 text-white bg-[#101010]'>
  
        <RouterProvider router={router}/>
        
      </div>
    </>
  )
}

export default App





