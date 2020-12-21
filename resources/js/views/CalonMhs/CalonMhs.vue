<template>
  <v-app>
    <v-app-bar
      app
      color="#2ecc71"
    >
      <v-img
        max-width="50"
        alt
        :src="'/images/logoUIN.png'"
      ></v-img>
      <v-toolbar-title class="judul">UIN SUSKA RIAU | Ujian Masuk Pascasarjana</v-toolbar-title>
      <!-- <v-toolbar-title></v-toolbar-title> -->
      <v-btn
        small
        text
      >
        <v-icon>mdi-logout-variant</v-icon>keluar
      </v-btn>
    </v-app-bar>
    <v-main class="main">
      <v-container style="height: 100%;">
        <!-- vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.main {
  background-color: #ecf0f1;
  background-size: 400px;
}
.judul {
  font-family: "IBM Plex Mono", monospace;
  /* font-size: 35px; */
  font-weight: bold;
  margin-left: 20px;
  width: 100%;
  font-size: 25px;
  color: #ecf0f1;
}

@media only screen and (max-width: 300px) {
  /* For tablets: */
  .judul {
    font-size: 15px;
    margin-left: 10px;
  }
}
</style>