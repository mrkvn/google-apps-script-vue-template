<template>
  <h1 class="text-9xl">
    Hello Vue Apps Script World!
  </h1>
  <button @click="handleClick" class="py-2 px-4 bg-amber-600 text-white font-bold rounded-lg mt-8">Call Apps Script
    Function</button>
  <p class="mt-2">Response from Apps Script: {{ res }}</p>

</template>
<script setup>
import { ref } from 'vue';
import runGas from './lib/api';

const res = ref(null)
async function handleClick() {
  res.value = await runGas('echo', ['Hello From Vue'])

}
</script>