<template>
  <nav v-if="!isLoginPage">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="text-uppercase">Movies</div>
      </div>

      <v-spacer />

      <v-btn icon class="mr-1" @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",

  computed: {
    isLoginPage() {
      return this.$route.name === "Login";
    },
  },

  methods: {
    logout() {
      this.$router.push('/login');
    },
  },
};
</script>
