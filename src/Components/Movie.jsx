import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Movie = ({ movie }) => {

  const [trailerUrl, setTrailerUrl] = useState("")
  const [actorName, setActorName] = useState([])
  const [actor, setActor] = useState([])

  useEffect(() => {
    try {
      if (movie.Actors) {
        const name = movie.Actors.split(",").map(data => data.trim())
        setActorName(name);
        // console.log(actorName)
      }
    } catch (error) {

    }

  }, [movie])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const actorDataPromise = await Promise.all(
          actorName.map(async (name) => {

            const response = await axios.get(
              `https://api.themoviedb.org/3/search/person`, {
              params: {
                api_key: "e319b396244f4ff8bba57c09fdf712bb",
                query: name,
              },
            });

            const results = response?.data?.results;

            if (!results || results.length === 0) {
              console.error(`No data found for ${name}`);
              return { name, image: "No image available" };
            }

            const actor = results[0]; // Take the first result if multiple results found

            const actorImage = actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              : "No image available";

            return { name: actor.name, image: actorImage };

          })
        );

        setActor(actorDataPromise);

      } catch (error) {
        console.error("Error fetching actor data:", error);
      }
    };

    fetchdata();
  }, [actorName]);

  useEffect(() => {
    const fetchVideo = async () => {

      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              q: `${movie.Title} trailer`,
              type: "video",
              key: "AIzaSyBezWtAvXvF9sDJajifHJ2Wk6ujVozGsxo",
            }
          }
        );

        const trailerId = response.data.items[0]?.id?.videoId;
        setTrailerUrl(`https://www.youtube.com/embed/${trailerId}`);

        //console.log(`https://www.youtube.com/embed/${trailerId}`);

      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    }
    fetchVideo();
  }, [movie])


  return (
    <div className='pt-5 md:pt-20 bg-[#1B1B1B]'>
      <div className='flex flex-row px-5 md:px-10 xl:px-40 md:mt-10 w-full justify-between capitalize'>
        <div className='flex flex-col'>
          <div className='text-2xl md:text-3xl'>{movie.Title}</div>
          <div className='text-[#989898] text-sm  md:text-xl'>{movie.Released}</div>
        </div>
        <div className='hidden lg:flex flex-col justify-end items-end text-right capitalize'>
          <div className='text-lg uppercase ' style={{ wordSpacing: "10px", letterSpacing: "2px" }}>imdb rating</div>
          <div className='flex gap-5 justify-center items-center'>
            <div><img className='w-[40px]' src="home/star.svg" alt="" /></div>
            <div className='text-4xl'>{movie.imdbRating}/10</div>
          </div>
          <div>{movie.imdbVotes}</div>
        </div>
      </div>

      <div className='w-full h-[73vh] sm:h-[30vh] md:h-[40vh] lg:h-[60vh] flex flex-col-reverse sm:flex-row sm:justify-between  sm:px-10 xl:px-40 md:my-10 gap-10 sm:gap-0'>
        <div className='w-full sm:w-[40%] flex gap-5'>
          <div className='rounded-[10px] w-[30%] sm:w-[70%] h-[20vh] sm:h-full'
            style={{
              backgroundImage: `url(${movie.Poster}}
)`,
              backgroundPosition: "top",
              backgroundSize: "cover"
            }}>
          </div>
          <div className='flex sm:hidden flex-col w-[60%] h-full p-2 justify-start items-center'>
            <div className=' flex scroll-section overflow-scroll gap-5 md:gap-20 md:px-40  w-full justify-start'>
              {movie.Genre.split(",").map((data, index) => (
                <div key={index} className=' bg-[#212121] rounded-[30px] font-normal border border-[#545454] px-5 py-1 text-sm whitespace-nowrap'><div>{data.trim()}</div></div>
              ))}
            </div>
            <div className=' py-2 flex text-sm sm:text-xl md:text-2xl font-normal'> <span className='font-light text-[#B6B6B6]'>{movie.Plot}</span></div>
          </div>
        </div>

        <div className='rounded-[10px] bg-black w-[100%] sm:w-[70%] h-[45vh] sm:h-full overflow-hidden flex justify-center items-center'>
          {trailerUrl && (
            <iframe
              className='w-[100%] h-[45vh] sm:h-[100%]'
              src={trailerUrl}
              title={`Trailer for ${movie.Title}`}
              allowFullScreen
            />
          )}
        </div>
      </div>

      <div className='hidden sm:flex gap-5 md:gap-20 md:px-40 my-20 w-full items-center flex-wrap justify-center md:justify-start'>
        {movie.Genre.split(",").map((data, index) => (
          <div key={index} className='bg-[#212121] rounded-full font-normal border border-[#545454] px-10 py-1 text-xl'>{data.trim()}</div>
        ))}
      </div>

      <div className='flex flex-col mx-5 sm:mx-10 lg:mx-40 my-5 sm:my-20 gap-5'>
        <div className='hidden sm:flex text-xl md:text-2xl font-normal whitespace-nowrap'>Plot : <span className='whitespace-normal px-5 font-light text-[#B6B6B6]'>{movie.Plot}</span></div>
        <div className='text-lg sm:text-xl md:text-2xl font-normal'>Director : <span className=' px-5 font-light '>{movie.Director}</span></div>
        <div className='text-lg sm:text-xl md:text-2xl font-normal flex'><div>Writer:</div>
          <div>
            {movie.Writer.split(',').map((data, index) => (
            <Link key={index}><span  className=' pl-5 font-light'>{data.trim()} </span></Link>
          ))}
          </div>
        </div>
        <div className='text-xl md:text-2xl'>
          Actors:
          <div className='w-[100%] scroll-section overflow-scroll my-5 sm:my-20 flex justify-start gap-2 md:gap-10 lg:gap-20 items-center'>
            {actor.map((data, index) => (
              <Link to={`/movinamee-suggestion/actor`} state={{name: `${data.name}`}} key={index}><div className=' flex flex-col justify-center items-center'>
                <div className='w-[140px] sm:w-[180px] lg:w-[200px] sm:h-[180px] h-[140px] lg:h-[200px] rounded-full bg-black border border-[#D3D3D3]'
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                  }}></div>
                <div className='text-center flex sm:my-5 text-lg sm:text-xl w-[120px] text-[#B6B6B6] h-[70px] justify-center items-center'>{data.name}</div>
              </div></Link>))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie

// useEffect(() => {
//   const fetchdata = async () => {

//     try {
//       const actorDataPromise = await Promise.all(
//         actorName.map(async (names) => {

//           const response = await axios.get(
//             `https://en.wikipedia.org/w/api.php`, {

//             params: {
//               action: "query",
//               titles: names,
//               prop: "pageimages",
//               format: "json",
//               pithumbsize: 500,
//               origin: "*",
//             },

//           }
//           );

//           const pages = response?.data?.query?.pages; // Safely accessing the data
//           if (!pages) {
//             console.error(`No data found for ${actorName}`);
//             return { name: actorName, image: "No image available" };
//           }
//           const pageId = Object.keys(pages)[0];
//           const page = pages[pageId]

//           const actorImage = page.thumbnail?.source || "No image is avalable"
//           const actorNamesArray = Array.isArray(page.title) ? page.title : [page.title]

//           return { name: actorNamesArray[0], image: actorImage };

//         }));

//       setActor(actorDataPromise);

//     } catch (error) {
//       console.error("Error fetching actor data:", error);
//     }
//   }
//   fetchdata()
// }, [actorName])

// const formatNumber = (number) => {
//   // Convert the string into a number first


//   if (number >= 1000000) {
//     return (number / 1000000).toFixed(1) + 'M';
//   } else if (number >= 1000) {
//     return (number / 1000).toFixed(1) + 'K';
//   } else {
//     console.log("hey")
//     return Number(number)/100;
//   }
// };
