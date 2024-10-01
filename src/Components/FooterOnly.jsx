import React from 'react'

const FooterOnly = () => {
    return (
        <div className='mt-24 flex flex-col justify-center text-center p-10'>
            <div className='text-4xl'>LOGO</div>
            <div className='w-[400px] mx-auto my-5 uppercase'>
                <ul className='flex text-center justify-between items-center text-xl '>
                    <li className='px-5 uppercase border-r-2'>home</li>
                    <li className='px-5 uppercase border-r-2'>catgories</li>
                    <li className='px-5 uppercase'>about us</li>
                </ul>
            </div>
            <div className='flex gap-5 justify-center'>
                <img width={40} src="home/talegram.svg" alt="" />
                <img width={40} src="home/instagram.svg" alt="" />
                <img width={40} src="home/twiter.svg" alt="" />
                <img width={40} src="home/linkdin.svg" alt="" />
            </div>
            <div className='mt-20 text-[#C8C8C8]'>copyright 2024. all right is ressolved</div>
        </div>
    )
}

export default FooterOnly
