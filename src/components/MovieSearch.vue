<template>
  <v-layout justify-center row wrap>
    <v-flex xs12 style="text-align: center;">
      <h1 class="display-3 font-weight-thin mb-3">Movies Search</h1>
      <h4 class="subheading">Find your favorite movies</h4>
    </v-flex>

    <v-flex xs12>
      <v-layout align-center justify-center row wrap>
        <v-flex xs6>
          <v-form>
            <v-text-field
              v-model="searchTerm"
              outlined
              label="Search"
              append-icon="mdi-magnify"
            />
          </v-form>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import MovieService from '@/services/MovieService.js'

export default {
  name: 'MovieSearch',

  data() {
    return {
      searchTerm: '',
    };
  },

  created() {
    // this.getFeaturedMovies();
  },

  methods: {
    searchMovies() {
      MovieService.getFeaturedMovies(this.searchTerm)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
};
</script>
