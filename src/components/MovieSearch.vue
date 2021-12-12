<template>
  <v-layout justify-center row wrap>
    <v-flex xs12 style="text-align: center;">
      <h1 class="display-3 font-weight-thin mb-3">Movies Search</h1>
      <h4 class="subheading">Find your favorite movies</h4>
    </v-flex>

    <v-flex xs12>
      <v-layout align-center justify-center row wrap>
        <v-flex xs5 lg1>
          <v-select
            v-model="searchBy"
            :items="searchByItems"
            item-text="text"
            item-value="value"
            outlined
            label="Search by"
            @change="resetSearch"
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="searchTerm"
            outlined
            label="Search"
            append-icon="mdi-magnify"
            :loading="isLoading"
            @input="searchMovies"
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import MovieService from '../services/MovieService.js'

export default {
  name: 'MovieSearch',

  data() {
    return {
      searchBy: 's',
      searchTerm: '',
      searchByItems: [
        { text: 'IMDB ID', value: 'i' },
        { text: 'Title', value: 's' },
      ],

      isLoading: false,
    }
  },

  methods: {
    async searchMovies() {
      if (this.searchTerm.length) {
        // debounce
        if (this.timeout) clearTimeout(this.timeout)

        this.timeout = setTimeout(async () => {
          this.isLoading = true

          const response = await MovieService.getMovies(
            `${this.searchBy}=${this.searchTerm}`,
          )

          if (response.data.Response === 'False') {
            this.isLoading = false
            return this.$emit('search-movies', [])
          }

          const movies =
            this.searchBy === 's' ? response.data.Search : [response.data]

          this.$emit('search-movies', movies)

          this.isLoading = false
        }, 350)
      }
    },

    resetSearch() {
      this.searchTerm = ''
      this.$emit('search-movies', [])
    },
  },
}
</script>
