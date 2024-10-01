import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="w-full h-[10vh] px-20 navbar uppercase flex justify-between items-center font-semibold">
                <div className=''>logo</div>
                <div  >
                    <ul className='flex justify-between items-center text-xl gap-20 '>
                        <li>home</li>
                        <li>catgories</li>
                        <li>about us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
