import React,{useState,useEffect} from 'react'
import style from '../css/AutoComplete.module.css'

export default function AutoComplete({ movies, setUserInput, userInput}) {

  const handleClick = (movie) => {
   return function() {
    console.log(movie)
    setUserInput(movie.original_title)
   } 
  }

  const uniqueTitle = (movies) => {
  const result = [];
  const map = new Map();
  for (const item of movies) {
    if(!map.has(item.original_title)){
        map.set(item.original_title, true);    // set any value to Map
        result.push({
          ...item
        });
    }
  }
  return result
}

  return (
    <div className={style.container}>
      {movies && uniqueTitle(movies).slice(0,10).sort((a,b)=> a.original_title.length - b.original_title.length).map(movie => {
        if (movie.original_title === userInput){
          return (
          <div id={movie.id} className={style.movieOverview}>Overview:{movie.overview.slice(0,80)}</div>
          )
        }
        return (
          <div id={movie.id} onClick={handleClick(movie)} className={style.listElement}>{movie.original_title}</div>
        )
      })
      }
    </div>
  )
}
