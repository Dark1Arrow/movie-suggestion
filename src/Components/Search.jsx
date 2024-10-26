import React, { useTransition } from 'react'
import { useState } from 'react'
import Movie from './Movie';

const search = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [movie, setMovie] = useState('')
    const [response, setResponse] = useState(false)
    const omdb = import.meta.env.REACT_APP_OMDB

    const findMovie = async (query) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=${tmdb}`)
            const data = await response.json()

            setMovie(data)

            if (data.Response == "False") {
                setResponse(false)
            } else {
                setResponse(true)
            }
        } catch (error) {

        }
    }

    const movieSubmit = (e) => {
        e.preventDefault();
        findMovie(searchMovie);
        console.log("click")

    }
    console.log(movie)

    return (
        <div>
            <div className=' w-full bg-[#1B1B1B] '>
                <div className='flex w-[90vw] md:w-[80vw] flex-col mx-auto'>
                    <div className=' mt-5 bg-[#212121] sm:p-2 flex gap-5 rounded-full justify-start items-center'>
                        <form className=' w-full flex justify-center items-center'
                            onSubmit={movieSubmit}
                        >
                            <input placeholder='Search movie' className='border border-[#2b2b2b] sm:border-none w-[70%] xl:w-[85%] bg-[#171717] h-[50px] px-10 rounded-l-full' type="text" value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} />
                            <button type='submit' className=' w-[30%] xl:w-[15%]'>
                                <div className='border border-[#2b2b2b] sm:border-none flex justify-center items-center bg-black rounded-r-full p-3  gap-5 '>
                                    <img className='md:flex hidden w-[25px]' src="Icons/search.svg" alt="" />
                                    <div className='text-lg sm:text-xl '>Search</div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
                    <div className=' h-[1px] mt-10 bg-[#636363]'></div>
            </div>

            <div>
                {
                    movie ? (
                        response ? (
                            <Movie movie={movie} />
                        ) : (
                            <div className='w-full bg-[#1B1B1B] h-[80vh] flex justify-center capitalize text-4xl items-center'>
                            {movie.Error}
                        </div>
                        )
                    ) : (
                        <div className='px-20 md:px-0 w-full bg-[#1B1B1B] h-[80vh] flex justify-center capitalize text-center text-xl md:text-4xl items-center'>
                            ! Search Your Favorite Movie
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default search
