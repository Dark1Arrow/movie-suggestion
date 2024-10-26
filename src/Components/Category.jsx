import React, { useState, useEffect } from 'react'
import Footer from './FooterOnly'
import Search from './Search';
import SearchCatgory from './searchCatgory';
import Navbar from './Navbar';

const Category = () => {

    const [search, setSearch] = useState(true)

    return (
        <div>
           <Navbar/>

            <div className='w-full bg-[#1B1B1B] py-5 lg:py-10 flex justify-center items-center gap-5 sm:gap-10 lg:gap-14 xl:gap-20 capitalize text-lg sm:text-xl font-medium text-[#999999]'>
                <div>categroy -</div>
                <div className={`w-[50px] sm:w-[70px] lg:w-[100px] bg-[#434343] rounded-full h-[30px] sm:h-[40px] lg:h-[50px] flex ${search ? "justify-start" : "justify-end"} items-center px-[5px] cursor-pointer`} onClick={() => `${search ? setSearch(false) : setSearch(true)}`}>
                    <div className='min-w-[20px] sm:min-w-[30px] lg:min-w-[40px] min-h-[20px] sm:min-h-[30px] lg:min-h-[40px] rounded-full bg-white'></div>
                </div>
                <div>- search</div>
            </div>

            <div>
                {search ? <SearchCatgory /> : <Search />}
            </div>

            <Footer />

        </div>
    )
}

export default Category
