import Navbar from './Navbar'
import React, { useState } from 'react'
import FooterOnly from './FooterOnly'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  //hero section
  const [heroData, setHeroData] = useState([])
  const [heroHover, setHeroHover] = useState(null)
  const [herobg, setHeroBg] = useState("The Dark Knight")

  //favorite section
  const [favoriteData, setFavoriteData] = useState([])
  const [favoriteHover, setFavoriteHover] = useState(null)

  //actor section
  const [actorData, setActorData] = useState([])
  const [actorHover, setActorHover] = useState(null)

  //actor section
  const [comingData, setComingData] = useState([])
  const [favoritesData, setFavoritesData] = useState(["", ""])

  //genre section
  const [genreData, setGenreData] = useState([])

  //toplist section
  const [toplistData, setToplistData] = useState([])

  //fetch data
  const fetchData = async () => {
    try {
      const movieData = await fetch('home.json')
      if (!movieData.ok) {
        throw new Error("Failed to facth movie data !");
      }
      const data = await movieData.json();
      setHeroData(data.heroSection);
      setFavoriteData(data.favoriteSection);
      setActorData(data.actorsSection);
      setComingData(data.comingSection);
      setGenreData(data.genreSection);
      setToplistData(data.toplistSection);
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className=''>
      <Navbar />

      <div className='hero-section w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]'>
        {heroData.filter(heroData => heroData.name === herobg).map((data, index) => (
          <div key={index} className='w-full h-full px-2 sm:px-5 lg:px-24 py-2 sm:py-5 flex justify-between flex-col'
            style={{
              backgroundImage: `url(${data.backgroundImage})`,
              backgroundPosition: "top",
              backgroundSize: "cover"
            }}>
            <div className='flex justify-end lg:justify-between'>
              <div className=' hidden lg:flex bg-[#00000070] uppercase text-3xl font-semibold justify-center items-center px-10 py-5 backdrop-blur-[5px]'>{data.name}</div>

              <div className=' rounded-full bg-[#00000053] uppercase text-3xl font-semibold px-2 sm:px-4 py-2 sm:py-4 backdrop-blur-[5px] hidden sm:flex gap-2 sm:gap-5'>
                <div className='w-[50px] h-[50px] rounded-full'
                style={{
                  backgroundImage: `url(${data.directorImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
                </div>
                <div className='mx-2 sm:mx-10'>
                  <div className='text-xl font-normal '>{data.director}</div>
                  <div className='text-sm font-medium text-[#B5B5B5]'>direacted by</div>
                </div>

              </div>
            </div>

            <div className='h-[75%] mt-24 w-[50%] mr-24 gap-5 right-0 hidden absolute lg:grid grid-cols-1 grid-rows-3'>
              {heroData.filter(heroData => heroData.name !== herobg).map((data, index) => (

                <div key={index} onClick={() => setHeroBg(data.name)} onMouseEnter={() => setHeroHover(index)} onMouseLeave={() => setHeroHover(null)} className='cursor-pointer border border-[#4d4d4d] w-[40%] h-full ml-auto rounded-[15px]'
                  style={{
                    backgroundImage: `url(${data.backgroundImage})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover"
                  }}>
                  {heroHover == index && (
                    <div className='border border-[#323232] bg-[#00000054] w-full h-full rounded-[15px] p-8 flex justify-start items-end '>
                      <div className='flex gap-2 flex-col'>
                        <div className='uppercase text-xl'>{data.name}</div>
                        <div className='uppercase text-lg flex gap-2'><img src="home/star.svg" alt="" /> {data.rating}/10</div>
                      </div>
                    </div>
                  )}
                </div>

              ))}
            </div>

            <div>
              <div className='sm:w-[450px] md:w-[550px] lg:w-[600px] bg-[#00000070] uppercase text-2xl sm:text-3xl font-semibold px-5 sm:px-10 py-5 backdrop-blur-[5px]'>
                <div className='text-lg font-normal'><span className='text-[#989898]'>{data.releaseDate.substring(0, 2)}</span> {data.releaseDate.substring(2)}</div>
                <div className='uppercase text:4xl md:text-5xl font-medium py-2 sm:py-5'>{data.name}</div>
              </div>

              <div className='flex justify-between w-full sm:w-[450px] md:w-[550px] lg:w-[600px] mt-5 md:mt-10'>
                <Link to={"/movie-suggestion/about"}><button className='bg-black px-8 sm:px-10 py-3 text-lg sm:text-2xl'><span className='text-[#989898]'>About</span> Us</button></Link>
                <Link to={`/movie-suggestion/movie`} state={{ movieTitle: `${data.name}` }}><button className='border bg-[#00000072] px-8 sm:px-10 py-3 text-lg sm:text-2xl'><span className='text-[#989898]'>see</span> Details</button></Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className='favorites-section scroll-section mx-2 sm:mx-5 md:mx-10 lg:mx-24 mt-10 md:mt-14 lg:mt-20 capitalize '>
        <div className='text-2xl sm:text-3xl md:text-4xl font-medium sm:font-normal'>fan <span className='text-[#989898]'>Favorites</span></div>

        <div className=' pt-5 sm:pt-10 lg:pt-20 flex gap-2 sm:gap-5 lg:gap-10 scroll-section overflow-auto'>
          {favoriteData.map((data, index) => (
            <Link to={`/movie-suggestion/movie`} state={{ movieTitle: `${data.name}` }} key={index}><div className='h-[270px] sm:h-[300px] lg:h-[350px] min-w-[160px] sm:min-w-[200px] lg:min-w-[250px]' >
              <div onMouseEnter={() => setHeroHover(index)} onMouseLeave={() => setHeroHover(null)} className='w-full h-[210px] sm:h-[250px] lg:h-[300px] rounded-[5px] border border-[#292929]'
                style={{
                  backgroundImage: `url(${data.background})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover"
                }}>
              </div>

              <div className='text-center p-2 sm:p-5 text-lg sm:text-xl'>{data.name}</div>
            </div></Link>
          ))}
        </div>
      </div>

      <div className='actors-section py-5 mt-10 md:mt-14 lg:mt-20 bg-[#1B1E20] capitalize '>
        <div className='mx-2 sm:mx-5 md:mx-10 lg:mx-24 mt-5 md:mt-10'>
          <div className='text-2xl sm:text-3xl md:text-4xl font-medium sm:font-normal'>most popular Celibratery -<span className='text-[#989898]'> top rising </span></div>

          <div className='py-10 md:py-14 lg:py-20 flex gap-5 lg:gap-10 scroll-section'>
            {actorData.map((data, index) => (
              <Link to={`/movie-suggestion/actor`} state={{ name: `${data.name}` }} key={index}><div className='min-w-[150px] md:min-w-[200px] lg:min-w-[250px] h-[150px] md:h-[200px] lg:h-[250px]'>
                <div className='w-full h-[150px] md:h-[200px] lg:h-[250px] rounded-full'
                  style={{
                    backgroundImage: `url(${data.background})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover"
                  }}></div>
                <div className='text-center p-2 md:p-5 text-lg sm:text-xl'>{data.name}</div>
              </div></Link>
            ))}
          </div>
        </div>
      </div>

      <div className='watchlist-section py-5 mt-5 lg:mt-20 capitalize '>
        <div className='mx-2 sm:mx-5 md:mx-10 lg:mx-24 mt-5 md:mt-10'>
          <div className='text-2xl sm:text-3xl md:text-4xl font-medium sm:font-normal'>wacthlist -  <span className='text-[#989898]'>save your favroiat movie </span></div>

          <div className='my-10 lg:my-24 flex flex-col justify-center items-center text-center gap-5 sm:gap-10'>
            <div><img width={40} src="home/whishlist.svg" alt="" /></div>
            <div className=' text-xl font-semibold sm:font-normal sm:text-3xl'>Sign in to access your watchlisst <div className=' mt-2 sm:mt-4 text-lg sm:text-2xl text-[#989898]'>Save shows and movies to keep track of what you want to watcH</div></div>
            <div><button className='text-lg sm:text-2xl bg-[#212121] text-[#173ECC] font-semibold rounded-lg px-8 md:px-14 py-2 sm:py-3 md:py-4  '>sign in</button></div>
          </div>
        </div>
      </div>

      <div className='intrust-section my-5 md:my-10 w-full bg-[#1B1E20] pt-8 md:pt-10 lg:py-10 px-2 sm:px-5 md:px-10 lg:px-24 capitalize'>
        <div className='text-2xl sm:text-3xl md:text-4xl font-medium sm:font-normal'>according your intrust  -  <span className='text-[#989898]'>we give top list </span></div>

        <div className='w-full flex gap-2 sm:gap-5 lg:gap-10 scroll-section'>
          {genreData.map((data, index) => (
            <Link to={`/movie-suggestion/categroy`} state={{ pram1: `${data.language}`, pram2: `${data.code}` }} key={index} ><div className='py-5 md:py-10'>
              <div className='min-w-[270px] sm:min-w-[300px] md:min-w-[390px] lg:min-w-[540px] h-[170px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-[15px]'
                style={{
                  backgroundImage: `url(${data.background})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover"
                }}></div>
              <div className='capitalize pt-3 px-5 text-lg font-medium sm:font-medium sm:text-xl'>genre - {data.genre}</div>
              <div className='text-[#173ECC] font-medium px-5 text-lg sm:text-xl'>see the list</div>
            </div></Link>
          ))}
        </div>
      </div>

      <div className='toplist-section my-10 w-full lg:py-10 px-2 sm:px-5 md:px-10 lg:px-24 capitalize'>
        <div className='text-2xl sm:text-3xl md:text-4xl font-medium sm:font-normal'>top 10  - <span className='text-[#989898]'>on these week</span></div>

        <div className='w-full flex scroll-section gap-2 sm:gap-5 lg:gap-10'>
          {toplistData.map((data, index) => (
            <Link to={`/movie-suggestion/movie`} state={{ movieTitle: `${data.name}` }} key={index}><div className='py-10 md:py-10 lg:py-20 min-w-[170px] md:min-w-[200px] lg:min-w-[250px]'>
              <div className='bg-[#1B1E20] rounded-[10px] p-2 lg:p-3 flex flex-col items-center ' >
                <div className=' w-full rounded-[10px] h-[200px] md:h-[250px] lg:h-[300px]'
                  style={{
                    backgroundImage: `url(${data.background})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover"
                  }}>
                  <img className='m-2' src={`home/${data.tag}.svg`} alt="" />
                </div>
                <div className='pt-2 text-lg md:text-xl'>{data.name}</div>
                <div className='flex justify-center items-center'> <img className='inline-block ' src="home/star.svg" alt="" /><span className='px-3'>{data.rating}/10</span></div>
                <div className='w-full pt-2'>
                  <button className='w-full border border-[#2b2b2b] py-2 bg-[#212121] flex justify-center text-center gap-2 capitalize rounded-lg'><img className='inline-block my-auto' src="home/add.svg" alt="" /><span className='text-lg md:text-xl'>watchlist</span></button>
                </div>
              </div>
            </div></Link>
          ))}
        </div>
      </div>

      <div className='upcoming-section mt-2 sm:mt-10 w-full bg-[#1B1E20] pt-5 md:pt-10 px-2 sm:px-5 md:px-10 lg:px-24 capitalize'>
        <div className='text-2xl sm:text-3xl md:text-4xl font-medium sm:font-normal'>cooming soon <span className='text-[#989898]'>on theater</span></div>

        <div className='w-full flex scroll-section gap-2 sm:gap-4 lg:gap-10'>
          {comingData.map((data, index) => (
            <Link to={`${data.Link}`} key={index}><div className='min-w-[270px] sm:min-w-[300px] md:min-w-[390px] lg:min-w-[540px] pt-10 lg:py-10 ' style={{ letterSpacing: "3px" }}>
              <div className='w-full h-[170px] sm:h-[200px] md:h-[250px] lg:h-[300px] bg-black rounded-[15px] flex p-2 sm:p-5 gap-5 sm:gap-10 items-end'
                style={{
                  backgroundImage: `url(${data.background})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover"
                }}>
                <img className='w-[40px] sm:w-[50px]' src="home/playbutton.svg" alt="" />
                <div className='h-[50px] items-center flex text-lg sm:text-xl'>2:32</div>
              </div>
              <div className='uppercase pt-3 px-5 text-[14px] md:text-lg text-[#989898]'>on {data.date}</div>
              <div className='uppercase font-medium px-5 text-lg md:text-xl'>{data.name}</div>
            </div></Link>
          ))}
        </div>
      </div>

      <FooterOnly />
    </div >
  )
}

export default Home
