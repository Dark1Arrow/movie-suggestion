import React, { useState, useEffect } from 'react'
import Movie from './Movie'
import Navbar from './Navbar'
import FooterOnly from './FooterOnly'
import { useLocation } from 'react-router-dom'
const omdb = import.meta.env.REACT_APP_OMDB

const MoviePage = () => {

    const location = useLocation();
   const { movieTitle} = location.state || {};
    const [movie, setMovie] = useState()

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${omdb}`)
                const data = await response.json()

                setMovie(data)
                console.log(data)
              } catch (error) {

            }
        }
        fecthData()
    },[movieTitle])

    useEffect(() => {
        console.log(movieTitle)
        console.log(movie)
    },[movie])
    return (
        <div className='bg-[#1B1B1B]'>
            <Navbar/>
            {movie ? <Movie movie={movie}/> : (<div className='w-full h-[60vh] flex justify-center items-center text-4xl '>Loading.....</div>)}
            <FooterOnly/>
        </div>
    )
}

export default MoviePage
