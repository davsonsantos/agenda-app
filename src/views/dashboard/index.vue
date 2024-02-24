<template>
    Dashboard
    <br><br>
    <pre>
        {{ authStore.user }}
    </pre>
    <br>
    Ta logado? {{ authStore.isLoggedIn }}
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
const authStore = useAuthStore();
/*Call Components*/
</script>