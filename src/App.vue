<template>
  <v-app>
    <app-navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppNavbar: () =>
      import(/* webpackChunkName: "AppNavbar" */ "./components/AppNavbar.vue"),
  },
};
</script>
