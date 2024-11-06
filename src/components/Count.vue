<script setup lang="ts">
import { Ref, ref } from 'vue'

const count: Ref<number> = ref(0)

function increment() {
    count.value++;
}

function reset() {
    count.value = 0;
}

</script>

<template>
  <h1>Count Component</h1>
  <button @click="increment">
    Count: {{ count }}
  </button>
  <button @click="reset">Reset</button>
  <hr></hr>
</template>

<style scoped>
</style>
