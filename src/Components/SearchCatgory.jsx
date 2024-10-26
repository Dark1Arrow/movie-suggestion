import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const tmdb = import.meta.env.REACT_APP_TMDB

const SearchCatgory = () => {

    const location = useLocation();
    const { pram1 } = location.state || {};
    const { pram2 } = location.state || {};
    const [year, setYear] = useState("2024")
    const [language, setLanguage] = useState(pram1)
    const [genre, setGenre] = useState(pram2)
    const [movie, setMovie] = useState([])
    const [triger, setTriger] = useState(false)

    const yeardata = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
    const languageData = [{ name: "Hindi", code: "hi" }, { name: "English", code: "en" }, { name: "Spanish", code: "es" }, { name: "French", code: "fr" }, { name: "Telugu", code: "te" }, { name: "Chinese", code: "zh" }, { name: "Japanese", code: "ja" }, { name: "Korean", code: "ko" }, { name: "Italian", code: "it" }, { name: "Portuguese", code: "pt" }, { name: "Russian", code: "ru" },]

    const genreData = [{ name: "Action", code: 28 }, { name: "Adventure", code: 12 }, { name: "Animation", code: 16 }, { name: "Comedy", code: 35 }, { name: "Fantasy", code: 14 }, { name: "History", code: 36 }, { name: "Horror", code: 27 }, { name: "Mystery", code: 9648 }, { name: "Romance", code: 10749 }, { name: "Science Fiction", code: 878 }, { name: "Thriller", code: 53 }, { name: "War", code: 10752 },
    ];


    useEffect(() => {
        const fetchmovie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`,
                    {
                        params: {
                            api_key: tmdb,
                            primary_release_year: year,
                            with_genres: genre,
                            with_original_language: language,
                            sort_by: "vote_average.desc", // Year filter
                            // "vote_count.gte": 100, // Ensure a decent number of votes for better rating
                            page: 1
                        },
                    }
                );
                setMovie(response.data.results.slice(0, 10));

            } catch (error) {
                console.error("Fething : ", error)
            }
        }
        if (triger) {
            setTriger(false)
        }
        fetchmovie();
    }, [triger])

    // console.log(movie)
    // console.log(genre, year)

    return (
        <div>
            <div className=' w-full bg-[#1B1B1B]'>
                <div className='flex w-full flex-col'>
                    <div className='flex flex-wrap  justify-center  items-center gap-3 sm:gap-10 xl:gap-20'>
                        <div className='lg:ml-20 lg:mt-5 bg-[#212121] border-2 border-[#363636] sm:p-2 lg:p-3 sm:pl-5 lg:px-10 flex gap-2 lg:gap-5 rounded-full justify-start items-center'>
                            <label className='sm:flex hidden text-xl lg:text-2xl font-normal capitalize' htmlFor="movie">movie : </label>
                            <div className='bg-[#171717] rounded-full text-white p-2 px-8'>
                                <select className='bg-[#171717] rounded-full text-white font-light text-sm sm:text-lg  capitalize sm:font-normal lg:font-medium pr-2' onChange={(e) => setLanguage(e.target.value)} name="" id="movie">
                                    <option value="" hidden>select movie</option>
                                    {languageData.map((data) => (
                                        <option key={data.name} value={`${data.code}`}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='border-2 border-[#363636]  lg:mt-5 bg-[#212121] sm:p-2 lg:p-3 sm:pl-5 lg:px-10 flex gap-2 lg:gap-5 rounded-full justify-start items-center'>
                            <label className='sm:flex hidden text-xl lg:text-2xl font-normal capitalize' htmlFor="year">Years : </label>
                            <div className='bg-[#171717] rounded-full text-white p-2 px-8'>
                                <select onChange={(e) => setYear(e.target.value)} className='bg-[#171717] rounded-full text-white font-light text-sm sm:text-lg  capitalize sm:font-normal lg:font-medium pr-2' name="" id="year">
                                    <option value="" hidden>select year</option>
                                    {yeardata.map((data) => (
                                        <option key={data} value={`${data}`} >{data}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='border-2 border-[#363636]  lg:mt-5 bg-[#212121] sm:p-2 lg:p-3 sm:pl-5 lg:px-10 flex gap-2 lg:gap-5 rounded-full justify-start items-center'>
                            <label className='sm:flex hidden text-xl lg:text-2xl font-normal capitalize' htmlFor="categroy">categroy : </label>
                            <div className='bg-[#171717] rounded-full text-white p-2 px-8'>
                                <select onChange={(e) => setGenre(e.target.value)} className='bg-[#171717] rounded-full text-white font-light text-sm sm:text-lg  capitalize sm:font-normal lg:font-medium pr-2' name="" id="categroy">
                                    <option value="" hidden>select categroy</option>
                                    {genreData.map((data) => (
                                        <option key={data.code} value={`${data.code}`}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='flex w-full justify-center items-center mt-5 sm:mt-10'><button onClick={() => setTriger(true)} className='border bg-[#171717] rounded-full border-[#5C5C5C] py-2 px-10 text-lg sm:text-2xl'>Search</button></div>
                    <div className=' h-[1px] mt-10 bg-[#636363]'></div>
                </div>

                <div className='min-h-[150vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 x-0  xl:mx-32'>
                    {movie.map((data, index) => (
                        <Link key={index} to={`/movie-suggestion/movie`} state={{movieTitle: `${data.title}`}} >
                            <div className='py-10 md:py-10 lg:py-10 min-w-[170px] md:min-w-[200px] lg:min-w-[250px] mx-5 lg:mx-10'>
                                <div className='border border-[#3A3A3A] bg-[#181818] flex flex-col movitems-center ' >
                                    <div className=' w-full h-[500px] sm:h-[200px] md:h-[250px] lg:h-[350px]'
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.poster_path}}
)`,
                                            backgroundPosition: "top",
                                            backgroundSize: "cover"
                                        }}>
                                        <img className='m-2 md:m-5 w-[30px] md:w-[50px]' src={`home/tag${index + 1}.svg`} alt="" />
                                    </div>
                                    <div className='pt-3 text-lg lg:text-xl text-center'>{data.title.split(":")[0]}</div>
                                    <div className='flex justify-center items-center text-lg'> <img className='inline-block ' src="home/star.svg" alt="" /><span className='p-3'>{data.vote_average.toFixed(1)}/10</span></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchCatgory

// const [searchMovie, setSearchMovie] = useState("");
//     const [movie, setMovie] = useState('')

//     const findMovie = async (query) => {
//         try {
//             const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=c3bdceb7`)
//             const data = await response.json()

//             setMovie(data)
//         } catch (error) {

//         }
//     }

//     const movieSubmit = (e) => {
//         e.preventDefault();
//         findMovie(searchMovie);
//         console.log("click")

//     }
//     console.log(movie)
