<template>
  <v-container fluid grid-list-xl class="mt-10">
    <movie-search @search-movies="setMovies" />

    <movie-list :movies="movies" />
  </v-container>
</template>

<script>
import MovieSearch from '@/components/MovieSearch.vue';

export default {
  name: 'Home',

  components: {
    MovieSearch,
    MovieList: () => import(/* webpackChunkName: "MovieList" */'@/components/MovieList.vue'),
  },

  data() {
    return {
      movies: [],
    }
  },

  methods: {
    setMovies(movies) {
      this.movies = movies;
    },
  }
}
</script>
