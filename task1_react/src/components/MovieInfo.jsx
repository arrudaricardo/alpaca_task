import React, { useState, useEffect } from 'react'
import { fetchMovieByID } from '../util'
const getImgURL = (path) => `https://image.tmdb.org/t/p/original${path}`

export default function MovieInfo({ movieID }) {

  const [movieData, setMovieData] = useState(null)


  useEffect(() => {
    fetchMovieByID(movieID).then(data => setMovieData(data))
  }, [movieID])


  useEffect(() => {
    console.log(movieData)
  }, [movieData])


  return (<div>
    {movieData &&
      <>
        <h1>{movieData.title}</h1>
        <p>{movieData.overview}</p>
        <a src={`https://www.imdb.com/title/${movieData.imdb_id}/`}>IMDB</a>
        <img src={getImgURL(movieData.poster_path)} alt="movie poster" />
      </>
    }
  </div>
  )
}
