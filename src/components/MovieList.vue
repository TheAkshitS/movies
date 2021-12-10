<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
      <movie-card :movie="movie" />
    </v-flex>
  </v-layout>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  name: 'MovieList',

  components: {
    MovieCard,
  },

  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
}
</script>
