<template>
    Dashboard
    <br><br>
    <pre>
        {{ meStore.user }}
    </pre>
    <br>
    Ta logado? {{ meStore.isLoggedIn }}
</template>

<script setup>
import { useMeStore } from '@/store/me';
const meStore = useMeStore();
/*Call Components*/
</script>