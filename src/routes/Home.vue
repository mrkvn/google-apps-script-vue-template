<template>
    <h1>Home Page</h1>
    <button @click="handleClick" class="py-2 px-4 bg-green-600 text-white font-bold rounded-lg mt-8">Call Apps Script
        Function</button>
    <p class="mt-2">Response from Apps Script: {{ res }}</p>
</template>
<script setup>
import runGas from '@/lib/api';
import { ref } from 'vue';

const res = ref(null)
async function handleClick() {
    res.value = await runGas('echo', ['Hello From Vue'])

}
</script>