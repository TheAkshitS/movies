<template>
  <v-card class="mx-auto" max-width="400">
    <v-img :src="movie.Poster" height="300px" />
    <v-card-title>
      {{ movie.Title }}
    </v-card-title>

    <v-card-subtitle>
      {{ movie.Year }}
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary lighten-2"
        text
        @click="showMovieDetails(movie.imdbID)"
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      show: false,
    }
  },

  methods: {
    showMovieDetails(id) {
      this.$router.push({
        name: 'Movie',
        params: {
          id,
        },
      })
    },
  },
}
</script>
