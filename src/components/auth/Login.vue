<template>
<v-container class="fondo signin-main" fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12>
      <v-card class="elevation-0 signin-form-wrapper not">
        <v-card-title class="title white--text justify-center">
          LOGIN
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation dark>
            <v-text-field v-model="user.email"
                          prepend-icon="person"
                          name="pin"
                          label="Email"
                          type="text"
                          :disabled="loading"
                          :rules="email"
                          color="white"
                          @keyup.enter=""
                          dark
            />
            <v-text-field v-model="user.password"
                          prepend-icon="lock"
                          name="password"
                          label="Password"
                          type="password"
                          :disabled="loading"
                          :rules="passwordRule"
                          color="white"
                          @keyup.enter=""
                          dark
            />
            <v-checkbox
              dark
              label="Remember me"
              v-model="user.remember"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn  @click="submit"
                  color="white"
                 :loading="loading"
                 :disabled="loading">Login</v-btn>
        </v-card-actions>
      </v-card>
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </v-flex>
  </v-layout> 
</v-container>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    loading: false,
    valid: true,
    user: {
      email: '',
      password: '',
      remember: true,
    },
    passwordRule: [
      v => !!v || 'The password is required',
      v => (v && v.length >= 8) || 'Password must include at least 8 characters',
    ],
    email: [
      v => !!v || 'The email is required',
    ],
  })
}
</script>

<style scoped>
.fondo {
  background: #D500F9;
  background: linear-gradient(135deg, #D500F9 0%, #651FFF 38%);
}
.card{
  min-width: 300px;
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  background-color: transparent !important;
  z-index: 2;
}
.focused:not(.input-group--focused) {
    label,
    i,
    input {
      opacity: 1 !important;
      color: #fff !important;
  }
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}

.bg-bubbles li:nth-child(1) {
  left: 10%;
}

.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 17s;
  animation-duration: 17s;
}

.bg-bubbles li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
  animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}

.bg-bubbles li:nth-child(5) {
  left: 70%;
}

.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}

.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
}

.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
}

.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}

.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
  animation-delay: 11s;
}

@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
  }
}

@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
  }
}


</style>