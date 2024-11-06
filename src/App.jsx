import { useState } from 'react'
import './App.css'
import Home from './Components/Watchlist'

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





