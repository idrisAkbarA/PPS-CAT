<template>
  <div>
    <!-- awal pencarian -->
    <v-row class="pl-8 pr-8">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        clearable
        label="Pencarian"
        color="#2C3E50"
      ></v-text-field>
    </v-row>
    <!-- akhir pencarian -->
    <!-- awal card -->
    <v-card
      v-for="n in 5"
      :key="n"
      color="rgba(46, 204, 113, 0.25)"
      class="mt-5"
    >
      <v-card-title>
        <v-chip
          color="#2C3E50"
          dark
        >
          No. 1
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn
          small
          color="#2C3E50"
          dark
          class="rounded-0"
        >
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          small
          color="#2C3E50"
          dark
          class="rounded-0"
        >
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="black--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam quis temporibus accusantium fuga incidunt. Sequi sed dolorem, adipisci,speriores possimus voluptates et illum aspernatur voluptatum nisi maiores inventore eos dicta.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, iusto maxime. Dicta odit est,
        culpa enim saepe ullam? Quidem quis laborum veniam hic incidunt eveniet perspiciatis delectus mollitia eius maxime.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <v-radio-group>
          <v-radio
            v-for="n in 5"
            :key="n"
            :value="n"
            label="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            color="#2C3E50"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <!-- akhir card -->
    <!-- awal buttom sheet tambah soal -->
    <v-bottom-sheet
      scrollable
      width="60%"
      inset
      overlay-color="#69F0AE"
      v-model="toggleDialogSoal"
    >
      <v-card color="#ecf0f1">
        <v-card-title> <span>Buat Soal</span>
          <v-spacer></v-spacer>
          <v-btn text>batal</v-btn>
          <v-btn
            color="#2C3E50"
            dark
          >Simpan</v-btn>
          <!-- v-model="" -->
        </v-card-title>
        <v-card
          color="rgba(46, 204, 113, 0.25)"
          class="ma-2"
          style="padding-bottom:0"
        >
          <v-card-text>
            <v-text-field
              clearable
              color="#2C3E50"
            >
            <template v-slot:label>
                <div class="black--text">Pertanyaan</div>
              </template>
            </v-text-field>
            <v-radio
              value="n"
              color="#2C3E50"
            >
              <template v-slot:label>
                <div class="black--text">Definitely Duckduckgo</div>
              </template>
            </v-radio>
            <v-btn
              class="mt-2 grey darken-3"
              fab
              dark
              small
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
        <v-row justify="center">
          <v-btn
            class="mt-2"
            fab
            dark
            small
            color="#2C3E50"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-row>
      </v-card>
    </v-bottom-sheet>
    <!-- akhir buttom sheet tambah soal -->
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  created() {
    console.log("ini dari created ", this.isTambahSoal);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isTambahSoal"]),
    toggleDialogSoal: {
      get: function() {
        return this.isTambahSoal;
      },
      set: function(data) {
        this.toggleTambahSoal(data);
      }
    }
  },
  methods: {
    ...mapMutations(["toggleTambahSoal"])
  }
};
</script>