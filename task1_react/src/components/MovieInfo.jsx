import React, { useState, useEffect } from 'react'
import { fetchMovieByID } from '../util'
import style from '../css/MovieInfo.module.css'
const getImgURL = (path) => `https://image.tmdb.org/t/p/original${path}`

export default function MovieInfo({ movieID }) {
  const [movieData, setMovieData] = useState(null)

  useEffect(() => {
    fetchMovieByID(movieID).then(data => setMovieData(data))
  }, [movieID])

  return (<>
    {movieData &&
      <div className={style.container}>
        <h1 style={{textAlign:"center", margin: '0'}}>{movieData.title}</h1>

        {movieData.imdb_id &&
          <a target="_blank" className={style.link} href={`https://www.imdb.com/title/${movieData.imdb_id}/`}>IMDB</a>

        }
        <div className={style.overview}>
        {movieData.overview ?
          <p>{movieData.overview}</p> :
          <p>No information availible</p>
        }
        {movieData.poster_path &&
          <img className={style.image} src={getImgURL(movieData.poster_path)} alt="movie poster" />
        }
        </div>
        
      </div>
    }
  </>
  )
}
