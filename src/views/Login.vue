<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-form
            ref="form"
            v-model="isValid"
            lazy-validation
            @submit.prevent="submit"
          >
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
                :rules="[rules.required, rules.email]"
              />
              <v-text-field
                v-model="form.password"
                prepend-icon="mdi-lock"
                :append-icon="showOpenEye ? 'mdi-eye' : 'mdi-eye-off'"
                name="password"
                label="Password"
                :type="showOpenEye ? 'text' : 'password'"
                :rules="[rules.required]"
                @click:append="showOpenEye = !showOpenEye"
              />
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" type="submit" :disabled="!isValid">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const VALID_EMAIL = 'test@gmail.com'
const VALID_PASSWORD = 'password'

export default {
  name: 'Login',

  data() {
    return {
      VALID_EMAIL,
      VALID_PASSWORD,

      form: {
        email: '',
        password: '',
      },

      rules: {
        required: (value) => !!value || 'Required',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail'
        },
      },

      isValid: true,
      showOpenEye: false,
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (
          this.form.email === this.VALID_EMAIL &&
          this.form.password === this.VALID_PASSWORD
        ) {
          localStorage.setItem('isLoggedIn', true)
          this.$router.push('/')
        } else {
          // TODO: Show error
        }
      }
    },
  },
}
</script>
