import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getFeaturedMovies() {
    return apiClient.get(
      `/discover/movie?sort_by=popularity.desc&api_key=${process.env.VUE_APP_API_KEY}`,
    )
  },

  getMovies(searchTerm) {
    return apiClient.get(
      `/movie?api_key=${process.env.VUE_APP_API_KEY}&${searchTerm}`,
    )
  },
}
