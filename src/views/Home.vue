<template>
  <v-container fluid grid-list-xl class="mt-10">
    <movie-search />

    <movie-list :movies="movies" />
  </v-container>
</template>

<script>
import MovieService from '../services/MovieService.js';

import MovieSearch from '@/components/MovieSearch.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'Home',

  components: {
    MovieSearch,
    MovieList,
  },

  data() {
    return {
      movies: [],
    }
  },

  created() {
    this.getFeaturedMovies();
  },

  methods: {
    async getFeaturedMovies() {
      try {
        const response = await MovieService.getFeaturedMovies();

        this.movies = response.data.results; 
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
