<template>
  <v-alert v-if="feedBackMessage" color="error" class="mb-3">{{
    feedBackMessage
  }}</v-alert>
  <v-form @submit.prevent="login()">
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">E-mail</v-label>
        <v-text-field
          v-model="email"
          variant="outlined"
          color="primary"
          type="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Senha</v-label>
        <v-text-field
          v-model="password"
          variant="outlined"
          type="password"
          color="primary"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <div class="ml-sm-auto">
            <RouterLink
              to="/"
              class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
              >Esqueceu a senha?</RouterLink
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn
          type="submit"
          color="primary"
          size="large"
          block
          flat
          :loading="loading"
          >Acessar</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
const checkbox = ref(true);

import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const email = ref("");
const password = ref("");
const feedBackMessage = ref("");
const loading = ref(false);

function login() {
  loading.value = true;
  feedBackMessage.value = "";
  axios.get("http://localhost:81/sanctum/csrf-cookie").then(() => {
    axios
      .post("http://localhost:81/api/login", {
        email: email.value,
        password: password.value,
      })
      .catch(() => {
        feedBackMessage.value = "E-mail ou senha inválidos";
      })
      .finally(() => {
        loading.value = false;
      });
  });
}
</script>
