import React,{useState, useEffect} from 'react'
import style from '../css/SearchInput.module.css'
import {fetchMovieByTitle} from '../util'
import AutoComplete from './AutoComplete'
import searchIcon from '../img/search-solid.svg'

export default function SearchInput() {
  const [userInput, setUserInput] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleUserInput = e => {
    setUserInput(e.target.value)
  }

  const handleAutoComplete = async () => {
    const movies = await fetchMovieByTitle(userInput)
    setSuggestions(movies)
  }
  const handleSearch = () => {
    return null
  }

  useEffect(()=>{
    handleAutoComplete()
  }, [userInput])


  return (
    <>
    <div className={style.container}>
    <input placeholder="movie title" maxLength="60" type="text" value={userInput} className={style.searchField} onChange={handleUserInput} />
    <div onClick={handleSearch} className={style.imageContainer}>
      <img className={style.image} src={searchIcon}/>
    </div>
    </div>
      <AutoComplete movies={suggestions} userInput={userInput} setUserInput={setUserInput} />
    </>
  )

}