<template>
  <v-app>
    <app-navbar />

    <v-main>
      <router-view />
    </v-main>

    <v-snackbar
      v-model="toast.show"
      :timeout="toast.timeout"
      :color="toast.color"
      bottom
    >
      {{ toast.message }}
      <v-btn
        v-if="toast.timeout === 0"
        color="white"
        text
        @click="toast.show = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    AppNavbar: () =>
      import(/* webpackChunkName: "AppNavbar" */ './components/AppNavbar.vue'),
  },

  computed: {
    ...mapState('app', ['toast']),
  },
}
</script>
