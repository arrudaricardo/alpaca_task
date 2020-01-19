import React,{useState,useEffect} from 'react'
import style from '../css/AutoComplete.module.css'

export default function AutoComplete({ movies, setUserInput, userInput, setMovieID }) {
  const [hover, setHover] = useState({})

  const handleClick = (movie) => {
   return function() {
    setUserInput(movie.title)
    setMovieID(movie.id)
   } 
  }

  const handleMouseEnter = (id) => {
    setHover(obj => ({...obj, [id]: true }))
  }

  const handleMouseLeave = (id) => {
    setHover(obj => ({...obj, [id]: false }))
  }

  const uniqueTitle = (movies) => {
  const result = [];
  const map = new Map();
  for (const item of movies) {
    if(!map.has(item.title)){
        map.set(item.title, true);   
        result.push({
          ...item
        });
    }
  }
  return result
}

  return (
    <div className={style.container}>
      {movies && uniqueTitle(movies).slice(0,4).sort((a,b)=> a.title.length - b.title.length).map((movie,i) => {

        return (
          <div 
          id={movie.id}
          onClick={handleClick(movie)} 
          className={style.listElement, hover[movie.id]? style.listHover: ''}
          onMouseEnter={() => handleMouseEnter(movie.id)}
          onMouseLeave={() => handleMouseLeave(movie.id)}
          >
            {movie.title}
            </div>
        )
      })
      }
    </div>
  )
}
