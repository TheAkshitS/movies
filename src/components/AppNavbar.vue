<template>
  <nav v-if="!isLoginPage">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="nav-item text-uppercase" @click="$router.push('/')">
          Movies
        </div>
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
  name: 'AppNavbar',

  computed: {
    isLoginPage() {
      return this.$route.name === 'Login'
    },
  },

  methods: {
    logout() {
      localStorage.clear()

      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
</style>
