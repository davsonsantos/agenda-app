<template>
    <VContainer>
        <!--  -->

        <!--<VBtn color="info" @click="getUser">Login</VBtn> -->

        {{ authStore.isLoggeddIn }}
        <br>
        <pre>
            {{ meStore.user }}
        </pre>
        <VTextField v-model="email" />
        <VTextField v-model="password" />
        <VBtn color="success" @click="login">Login</VBtn>
        <VBtn @click="sunctun">Sunctun</VBtn>
    </VContainer>
</template>
  
<script setup>

import { ref } from 'vue';
import { useAuth } from '@/store/auth';
import { useMe } from '@/store/me';

const meStore = useMe();
const authStore = useAuth();


const email = ref('test@example.com');
const password = ref('password');
''
function sunctun() {
    authStore.sanctum();
}

function login() {
    authStore.login(email.value, password.value);
}

</script>
  