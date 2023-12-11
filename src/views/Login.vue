<template>
    <VContainer>
        <VTextField v-model="email" />
        <VTextField v-model="password" />
        <VBtn color="success" @click="login">Login</VBtn>
        <VBtn @click="sunctun">Sunctun</VBtn>
    </VContainer>
</template>
  
<script setup>

import { ref } from 'vue';
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuth();

const email = ref('test@example.com');
const password = ref('password');

function sunctun() {
    authStore.sanctum();
}

function login() {
    authStore.login(email.value, password.value).then(() => {
        router.push({ name: 'dashboard' });
    });
}

</script>
  