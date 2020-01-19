import React,{useState, useEffect} from 'react'
import style from '../css/SearchInput.module.css'
import {fetchMovieByTitle, fetchMovieByID} from '../util'
import AutoComplete from './AutoComplete'
import MovieInfo from './MovieInfo'
import searchIcon from '../img/search-solid.svg'

export default function SearchInput() {
  const [userInput, setUserInput] = useState('')
  const [autoComplete, setAutoComplete] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [movieID, setMovieID] = useState()

  const handleUserInput = e => {
    setAutoComplete(true)
    setUserInput(e.target.value)
  }

  const handleAutoComplete = async () => {
    const movies = await fetchMovieByTitle(userInput)
    setSuggestions(movies)
  }
  
  const handleSearch = () => {
    const movie = suggestions.filter(movie => movie.title === userInput)
    if (movie[0]){
      setAutoComplete(false)
      setMovieID(movie[0].id)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSearch()
    }
  }

  useEffect(()=> {
   handleSearch()
  },[movieID])

  useEffect(()=>{
    if (autoComplete) {
      handleAutoComplete()
    }
  }, [userInput])


  return (
    <>
    <div className={style.container}>
    <input 
    autocorrect="off" 
    autocapitalize="off" 
    spellcheck="false"
    placeholder="movie title" 
    maxLength="60" 
    type="text" 
    onKeyDown={handleKeyDown}
    value={userInput} 
    className={style.searchField} 
    onChange={handleUserInput}
     />
    <div 
    onClick={handleSearch}
    className={style.imageContainer}
    >
      <img 
      className={style.image} 
      src={searchIcon}/>
    </div>
    </div>
    { autoComplete &&
      <AutoComplete 
      setMovieID={setMovieID}
      handleSearch={handleSearch}
      movies={suggestions} 
      userInput={userInput} 
      setUserInput={setUserInput}
      />
    }
    {movieID && <MovieInfo movieID={movieID}/>}
    </>
  )

}