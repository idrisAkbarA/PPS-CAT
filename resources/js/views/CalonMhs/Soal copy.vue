<template>
  <v-container style="height:100%;">
    <v-row style="height: 100%;" v-if="windowWidth>800">
      <v-col
        cols="12"
        md="8"
        class="pa-0"
      >
        <v-card
          color="#ecf0f1"
          class="blue-grey--text text--darken-4"
          style="position:absolute; height: 100%; border: 2px solid #2ecc71; border-radius: 5px;"
        >
          <v-card-title>
            <v-row class="mx-0">
              <span class="mr-2">Soal No.</span>
              <v-chip
                color="#2ecc71"
                text-color="#ecf0f1"
              >01</v-chip>
              <v-spacer></v-spacer>
              <div v-if="windowWidth>300">
                <v-chip
                  color="#2ecc71"
                  text-color="#ecf0f1"
                >Sisa Waktu</v-chip>
                <v-chip
                  color="#2ecc71"
                  text-color="#ecf0f1"
                >01:00:00</v-chip>
              </div>
            </v-row>
            <v-row
              v-if="windowWidth<300"
              class="mx-0"
            >
              <v-chip
                color="#2ecc71"
                text-color="#ecf0f1"
              >Sisa Waktu</v-chip>
              <v-chip
                color="#2ecc71"
                text-color="#ecf0f1"
              >01:00:00</v-chip>
            </v-row>
          </v-card-title>

          <v-card-text class=" soal blue-grey--text text--darken-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
          </v-card-text>
          <v-card-actions v-if="windowWidth>800">
            <v-btn
              color="#2ecc71"
              style="color: #ecf0f1"
            >SOAL SEBELUMNYA</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="#2ecc71"
              style="color: #ecf0f1"
            >RAGU - RAGU</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="#2ecc71"
              style="color: #ecf0f1"
            >SOAL BERIKUTNYA</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="py-0"
      >
        <v-card
          outlined
          color="rgba(46, 204, 113, 0.25)"
          class="blue-grey--text text--darken-4"
          style="height: 100%;"
        >
          <v-card-title>
            Nomor
          </v-card-title>

        </v-card>
      </v-col>
    </v-row>

    <!-- Mobile -->
    <v-col style="height: 100%;" v-if="windowWidth<800">
      <v-row
        rows="12"
        md="8"
        class="pa-0"
      >
        <v-card
          color="#ecf0f1"
          class="blue-grey--text text--darken-4"
          style="position:absolute; height: 100%; border: 2px solid #2ecc71; border-radius: 5px;"
        >
          <v-card-title>
            <v-row class="mx-0">
              <span class="mr-2">Soal No.</span>
              <v-chip
                color="#2ecc71"
                text-color="#ecf0f1"
              >01</v-chip>
              <v-spacer></v-spacer>
              <div v-if="windowWidth>300">
                <v-chip
                  color="#2ecc71"
                  text-color="#ecf0f1"
                >Sisa Waktu</v-chip>
                <v-chip
                  color="#2ecc71"
                  text-color="#ecf0f1"
                >01:00:00</v-chip>
              </div>
            </v-row>
            <v-row
              v-if="windowWidth<300"
              class="mx-0"
            >
              <v-chip
                color="#2ecc71"
                text-color="#ecf0f1"
              >Sisa Waktu</v-chip>
              <v-chip
                color="#2ecc71"
                text-color="#ecf0f1"
              >01:00:00</v-chip>
            </v-row>
          </v-card-title>

          <v-card-text class=" soal blue-grey--text text--darken-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,
            asperiores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
            culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
          </v-card-text>
          <v-card-actions v-if="windowWidth<800">
            <v-col>
              <v-row class="my-1">
                <v-btn
                  small
                  color="#2ecc71"
                  style="color: #ecf0f1"
                >SOAL SEBELUMNYA</v-btn>
              </v-row>
              <v-row class="my-1">
                <v-btn
                  small
                  color="#2ecc71"
                  style="color: #ecf0f1"
                >RAGU - RAGU</v-btn>
              </v-row>
              <v-row class="my-1">
                <v-btn
                  small
                  color="#2ecc71"
                  style="color: #ecf0f1"
                >SOAL BERIKUTNYA</v-btn>
              </v-row>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row
        rows="12"
        md="4"
        class="py-0"
        v-if="windowWidth<800"
      >
        <v-card
          outlined
          color="rgba(46, 204, 113, 0.25)"
          class="blue-grey--text text--darken-4"
          style="height: 100%;"
        >
          <v-card-title>
            Nomor
          </v-card-title>

        </v-card>
      </v-row>
    </v-col>
  </v-container>

</template>

<style scoped>
.soal {
  overflow-y: auto;
  height: 75%;
}
.nomor {
  overflow-y: auto;
  height: 100%;
}
</style>