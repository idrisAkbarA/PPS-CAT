<template>
  <v-app
    class="mx-auto overflow-hidden"
    height="400"
  >
    <v-app-bar
      app
      color="#2ecc71"
      dark
    >
      <v-app-bar-nav-icon
        color="#ecf0f1"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="judul">Ujian Masuk Pascasarjana | Dashboard</v-toolbar-title>
      <v-slide-y-transition>
          <!-- v-if="isTambahSoal" -->
        <v-btn
          small
          color="#2C3E50"
          @click="setTambahSoalToTrue()"
        >
          <v-icon> mdi-plus</v-icon> tambah soal
        </v-btn>
      </v-slide-y-transition>
      <v-btn
        small
        text
      >
        <v-icon>mdi-logout-variant</v-icon>keluar
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="green--text text--darken-2"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-bank</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bank Soal</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Setting Ujian</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main">
      <v-container style="height: 100%;">
        <!-- vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['isTambahSoal']),
  },
  methods: {
    ...mapMutations(['toggleTambahSoal']),
    setTambahSoalToTrue(){
      this.toggleTambahSoal(true);
    }
    
  },
  data: () => ({
    drawer: false,
    group: null
  })
};
</script>

<style scoped>
.main {
  background-color: #ecf0f1;
  background-size: 400px;
}
.judul {
  font-family: "IBM Plex Mono", monospace;
  font-weight: bold;
  margin-left: 20px;
  width: 100%;
  font-size: 25px;
  color: #ecf0f1;
}
</style>