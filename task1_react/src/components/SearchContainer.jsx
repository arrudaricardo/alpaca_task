import React from 'react'
import SearchInput from './SearchInput'
import style from '../css/Search.module.css'


export default function search(){

  return (
    <div className={style.container}>
      <h1 className={style.title}>Movie Search:</h1>
    <SearchInput/>
    </div>
  )
}