import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://www.omdbapi.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getMovies(searchTerm) {
    return apiClient.get(`?apikey=${process.env.VUE_APP_API_KEY}&${searchTerm}`)
  },
}
