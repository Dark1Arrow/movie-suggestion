import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'

const Navbar = () => {
    const [bar, setbar] = useState(false)
    return (
        <div>
            <motion.div initial={{y : bar ? "0vh":"-100vh"}} animate={{y : bar ? "0vh" : "-100vh"}} transition={{ease: easeOut , duration: 1}} className={`flex flex-col fixed top-0 bottom-0 bg-[#1B1D1F] z-50 min-w-full min-h-full`}>
                <div className='m-8'><img onClick={() => setbar(false)} src="home/arrow.svg" alt="" /></div>
                <div className='w-full h-[1px] bg-white'></div>
                <div className='h-[80vh] flex justify-center items-center w-full text-center'>
                    <ul className='capitalize flex flex-col justify-between items-center text-4xl gap-10 lg:gap-20 '>
                        <Link to={"/movie-suggestion/"}>home</Link>
                        <Link to={"/movie-suggestion/categroy"} state={{pram1: "hi",pram2: 28}}>catgories</Link>
                        <Link to={"/movie-suggestion/about"}>about us</Link>
                    </ul>
                </div>
            </motion.div>
            <div className="bg-[#121213] w-full h-[10vh] px-5 lg:px-20 navbar uppercase flex justify-between items-center font-semibold">
                <div className=''><img className='w-[90px]' src="home/logo.svg" alt="" /></div>
                <div className='cursor-pointer flex md:hidden ' onClick={() => setbar(true)}><img className='w-[40px]' src="home/menu.svg" alt="" /></div>
                <div className='hidden md:flex' >
                    <ul className='flex justify-between items-center text-xl gap-10 lg:gap-20 '>
                        <Link to={"/movie-suggestion/"}>home</Link>
                        <Link to={"/movie-suggestion/categroy"} state={{pram1: "hi",pram2: 28}} >catgories</Link>
                        <Link to={"/movie-suggestion/about"}>about us</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
