<template>
  <v-container fill-height>
    <v-card
      class="mx-auto"
      flat
      width="100%"
    >
      <v-card-text>
        <v-container>

          <v-row dense>
            <v-col>
              <h2>Login</h2>
            </v-col>
          </v-row>
          <v-row
            dense
            v-if="error"
          >
            <v-col>
              <p class="red--text">{{error}}</p>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-text-field
                :rules="rule"
                prepend-inner-icon="mdi-account-circle"
                hide-details="auto"
                color="green"
                :label="loginUrl=='login'?'Email':'Username'"
                v-model="username"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-text-field
                :rules="rule"
                prepend-inner-icon="mdi-lock"
                color="green"
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                @keyup.enter="login()"
                label="Password"
                @click:append="show1 = !show1"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              ></v-text-field>

            </v-col>
          </v-row>
          <v-row
            class="mt-3"
            align="center"
            dense
          >
            <v-col cols="3">
              <v-btn
                :loading="loading"
                @click="login()"
                color="green"
                dark
              >Login</v-btn>

            </v-col>
            <v-col v-if="loginUrl == 'login' ">
              <span>
                Belum memiliki akun? Daftar <a href="/pendaftaran">disini</a>.
              </span>

            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    var pathArray = window.location.pathname.split("/");
    this.loginUrl = pathArray[pathArray.length - 1];
  },
  methods: {
    async login() {
      this.loading = true;
      var isCSRFOkay = await this.getCSRF();
      if (isCSRFOkay) {
        this.loginProcess();
      } else {
        this.loading = false;
        console.log("Couldn't get CSRF Cookie");
        this.error = "Maaf terjadi kesalahan, coba lagi dalam beberapa saat";
      }
    },
    loginProcess() {
      // set api request url based on window url
      var url = "";
      var redirectUrl = "";
      var payload = {};
      if (this.loginUrl != "login-admin") {
        payload = { email: this.username, password: this.password };
        url = "cln_mahasiswa";
        redirectUrl = "cln-mhs/home";
      } else {
        redirectUrl = "petugas/dashboard";
        payload = { username: this.username, password: this.password };
        url = "petugas";
      }

      axios
        .post("/api/authenticate/" + url, payload)
        .then((response) => {
          console.log(response.data);
          if (response.data.status != "Authenticated") {
            this.loading = false;
            return (this.error = "Maaf kata sandi/email anda salah");
          }
          console.log("logged in");
          // redirect to user page if logged in
          window.location.replace("/user/" + redirectUrl);
        })
        .catch((err) => {
          this.loading = false;
          this.error = "Maaf terjadi kesalahan, coba lagi dalam beberapa saat";
        });
    },
    getCSRF() {
      // return true if retrieved, false if didnt
      return axios
        .get("/sanctum/csrf-cookie")
        .then((response) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
    },
  },
  data() {
    return {
      loginUrl: "",
      loading: false,
      error: null,
      show1: false,
      email: "",
      username: "",
      password: "",
      rule: [(v) => !!v || "Field ini wajib diisi"],
    };
  },
};
</script>

<style></style>
