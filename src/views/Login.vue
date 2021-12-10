<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-form @submit.prevent="submit">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Movies</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="form.email"
                prepend-icon="mdi-email"
                name="Email"
                label="Email"
                type="email"
              />
              <v-text-field
                v-model="form.password"
                prepend-icon="mdi-lock"
                :append-icon="showOpenEye ? 'mdi-eye' : 'mdi-eye-off'"
                name="password"
                label="Password"
                :type="showOpenEye ? 'text' : 'password'"
                @click:append="showOpenEye = !showOpenEye"
              />
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      showOpenEye: false,

      form: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    submit() {
      this.$router.push('/home')
    },
  },
};
</script>
