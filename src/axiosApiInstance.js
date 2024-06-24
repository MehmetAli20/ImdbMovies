import axios from 'axios'

const axiosApiInstance = axios.create({
  baseURL: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '1f2051dc0fmshd928750cccf372ap17db14jsnc26b0f4c4c4e',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
});

export default axiosApiInstance