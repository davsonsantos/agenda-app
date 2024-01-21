<template>
  Dashboad
  <br />
  <pre>{{ meStore.user }}</pre>
  <br />
  Tá logado: {{ meStore.isLoggedIn }}
</template>
<script setup>
import { useMeStore } from "@/store/me";
const meStore = useMeStore();
</script>
