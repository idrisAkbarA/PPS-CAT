<template>
  <div>
    <v-card
      color="rgba(46, 204, 113, 0.25)"
      class="blue-grey--text text--darken-4"
    >
      <v-card-title style="margin-bottom:-15px;">Informasi Peserta</v-card-title>
      <v-simple-table
        dense
        light
        style="background-color: rgba(0, 0, 0, 0);"
        class="blue-grey--text text--darken-4"
      >
        <tbody>
          <tr>
            <td>Nama</td>
            <td>: Rindi Yani</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: Rindiy@email.com</td>
          </tr>
          <tr>
            <td>Jenis Kelamin</td>
            <td>: Perempuan</td>
          </tr>
          <tr>
            <td>Tempat Tanggal Lahir</td>
            <td>: Palembayan, 31 Agustus 2000</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
    <v-card
      color="rgba(46, 204, 113, 0.25)"
      class="blue-grey--text text--darken-4 mt-3"
    >
      <!-- :height="200" -->
      <v-card-title>Petunjuk Pengerjaan Soal</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="#d35400"
          style="color: #ecf0f1"
        >Mulai Ujian</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>