<template>
<v-container>
  <v-card elevation="14">
    <v-card-title>
      Login
    </v-card-title>
    <v-card-text>
      <p class="red--text"></p>
      <v-text-field
        prepend-inner-icon="mdi-account-circle"
        color="white"
        label="Username"
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-lock"
        color="white"
        label="Password"
      ></v-text-field>

      <v-btn
        color="green"
      >login</v-btn>

    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            show: false,
        }
    },
}
</script>