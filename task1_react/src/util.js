const axios = require('axios');

const APIKEY = 'f3a05026119d09f84c9aaef927a18ac2'

const moviedbURL = (keyword, apiKey=APIKEY) => {
return `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
}

const parseMovieData = (respose) => {
   const results = respose.data.results
   return results
}

export const fetchMovieByTitle = (movieTitle) => {
  if (movieTitle === '') return []
  return(
  axios.get(moviedbURL(movieTitle))
  .then( response => parseMovieData(response))
  .catch(error => error )
  )
}


