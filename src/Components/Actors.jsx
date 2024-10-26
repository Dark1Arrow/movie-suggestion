import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import FooterOnly from './FooterOnly'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Actors = () => {
    const location = useLocation();
    const { name } = location.state || {};
    const [actorDetail, setActorDetail] = useState([])
    const [wikiLink, setWikiLink] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person`, {
                    params: {
                        api_key: "e319b396244f4ff8bba57c09fdf712bb",
                        query: name
                    }
                })

                const actorsData = response.data.results[0]

                if (actorsData) {
                    const actorsSearch = await axios.get(`https://api.themoviedb.org/3/person/${actorsData.id}`, {
                        params: {
                            api_key: "e319b396244f4ff8bba57c09fdf712bb",
                        }
                    })

                    setActorDetail(actorsSearch.data)
                } else {
                    console.log("error in fetching")
                }

            } catch (error) {
                setError('Error fetching data');
            }
        }
        fetchdata()
    }, [])


    useEffect(() => {
        const fetchWikipediaLink = async () => {
            try {
                const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                    params: {
                        action: 'query',
                        list: 'search',
                        srsearch: name,
                        format: 'json',
                        origin: '*', // Needed for CORS handling in browsers
                    },
                });

                if (response.data.query.search[0]) {
                    const pageTitle = response.data.query.search[0].title;
                    setWikiLink(`https://en.wikipedia.org/wiki/${encodeURIComponent(pageTitle)}`);
                }
            } catch (error) {
                console.error('Error fetching Wikipedia link:', error);
            }
        };

        fetchWikipediaLink();
    }, []);

    console.log(wikiLink)
    console.log(actorDetail)
    return (
        <div>
            <div>
                <Navbar />

                <div className='px-5 sm:px-20 xl:px-52 w-full h-[120vh] sm:h-[90vh] bg-black flex flex-col gap-5 sm:gap-10'>
                    <div className='w-full pt-10 sm:pt-20 flex flex-col md:gap-2 '>
                        <div className='text-2xl md:text-5xl'>{actorDetail.name}</div>
                        <div className='text-lg text-[#989898]'>{actorDetail.known_for_department}</div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 lg:gap-40'>
                        <div className='border-2 rounded-[10px] border-[#3A3A3A] w-[90vw] sm:w-[30vw] xl:w-[20vw] h-[50vh] sm:h-[40vh] md:h-[60vh]'
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500${actorDetail.profile_path})`,
                                backgroundPosition: "top",
                                backgroundSize: "cover"
                            }}
                        ></div>
                        <div className=' flex flex-col gap-5 lg:gap-10 w-[90vw] sm:w-[50vw] h-[60vh]'>
                            <div className='w-full flex justify-end text-[#989898] text-xl sm:text-2xl'>Born  {actorDetail.birthday}</div>
                            <div className='flex flex-col sm:h-full justify-center items-center gap-5 lg:gap-10'>
                                <div className='text-sm sm:text-xl lg:text-2xl h-[25vh] sm:h-[35vh] scroll-section-y overflow-scroll text-[#E3E3E3]'>{actorDetail.biography}</div>
                                <div className='w-full text-[#989898] text-xl lg:text-2xl'>Place of birth - {actorDetail.place_of_birth
                                }</div>
                                <div className='cursor-pointer w-full text-[#173ECC] text-xl lg:text-2xl'><Link to={wikiLink}>for more information</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actors
