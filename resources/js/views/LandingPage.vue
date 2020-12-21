<template>
  <v-app class="green lighten-3">
    <div class="bg green"></div>
    <v-container
      style="z-index:2"
      fluid
      fill-height
    >
      <v-container>
        <v-row>
          <img
            class="mx-auto mb-1"
            width="15%"
            :src="'/images/LogoUIN.png'"
            alt="logo"
          >
        </v-row>
        <v-row>
          <v-card class="mx-auto">
            <v-card-title>Selamat Datang di Aplikasi CAT</v-card-title>
            <v-card-subtitle>Pasca Sarajna UIN Suska Riau</v-card-subtitle>
            <v-card-text>
              <login-component></login-component>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import LoginComponent from "../views/Login/LoginComponent";
export default {
  components: {
    LoginComponent,
  },
};
</script>

<style>
.bg {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
}
</style>