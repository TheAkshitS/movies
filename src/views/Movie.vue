<template>
  <v-container>
    <template v-if="Object.keys(movieDetails).length">
      <v-row class="mt-5">
        <v-col cols="12" md="5">
          <v-img :src="movieDetails.Poster" height="600" contain />
        </v-col>
        <v-col>
          <div class="font-weight-bold mb-2">
            Title:
            <span class="font-weight-medium">{{ movieDetails.Title }}</span>
          </div>
          <div class="font-weight-bold mb-2">
            Genre:
            <span class="font-weight-medium">{{ movieDetails.Genre }}</span>
          </div>
          <div class="font-weight-bold mb-2">
            Director:
            <span class="font-weight-medium">{{ movieDetails.Director }}</span>
          </div>
          <div class="font-weight-bold mb-2">
            IMDB Rating:
            <span class="font-weight-medium">
              {{ movieDetails.imdbRating }}
            </span>
          </div>
          <div class="font-weight-bold mb-2">
            Actors:
            <span class="font-weight-medium">{{ movieDetails.Actors }}</span>
          </div>
          <div class="font-weight-bold mb-2">
            Awards:
            <span class="font-weight-medium">{{ movieDetails.Awards }}</span>
          </div>
          <div class="font-weight-bold mb-2">
            BoxOffice:
            <span class="font-weight-medium">{{ movieDetails.BoxOffice }}</span>
          </div>
        </v-col>
      </v-row>
    </template>

    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="80" color="primary" />
    </v-overlay>
  </v-container>
</template>

<script>
import MovieService from '../services/MovieService.js'

export default {
  name: 'Movie',

  data() {
    return {
      movieDetails: {},
      isLoading: false,
    }
  },

  computed: {
    movieID() {
      return this.$route.params.id
    },
  },

  created() {
    this.getMovieDetails()
  },

  methods: {
    async getMovieDetails() {
      this.isLoading = true

      const response = await MovieService.getMovies(`i=${this.movieID}`)
      this.movieDetails = response.data

      this.isLoading = false
    },
  },
}
</script>
