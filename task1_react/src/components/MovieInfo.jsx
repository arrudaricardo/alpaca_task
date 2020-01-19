import React from 'react'

const getImgURL = (path) => `https://image.tmdb.org/t/p/original${path}`

export default function MovieInfo({movie}){

  return (<div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            {movie.release_data}
            <img src={getImgURL(movie.poster_path)} alt="movie poster"/>
        </div>
  )
}