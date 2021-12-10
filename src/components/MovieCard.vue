<template>
  <v-card flat color="grey" class="text-xs-center ma-3">
    <v-responsive class="pt-4">
    </v-responsive>
    <v-card-text>
      <div class="subheading">{{ movie.title }}</div>
      <!-- class="grey--text" -->
      <div>{{ movie.release_date }}</div>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn flat color="grey">
          <v-icon small left>message</v-icon>
          <span class="">Message</span>
        </v-btn> -->
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
}
</script>
