import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-0 p-0 text-white bg-[#101010]'>
        <Home/>
        
      </div>
    </>
  )
}

export default App
