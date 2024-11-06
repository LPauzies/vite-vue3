<script setup lang="ts">
import { Ref, ref } from 'vue'

const objectList: Ref<{count: number, list: string[]}> = ref({
    count: 0,
    list: []
})
const dynamicValue: Ref<string> = ref("")

function pushValue() {
    objectList.value.count++;
    objectList.value.list.push(dynamicValue.value);
}

function reset() {
    objectList.value.count = 0;
    objectList.value.list = [];
}

</script>

<template>
  <h1>Count Component</h1>
  <input v-model="dynamicValue" name="dynamic-value" placeholder="Enter a value"/>&nbsp;
  <button @click="pushValue">Create value : {{ dynamicValue }}
  </button>&nbsp;
  <button @click="reset">Reset</button>
  <br>
  <span>Count: {{ objectList.count }}</span>
  <br>
  <ul>
    <li v-for="element in objectList.list">
      {{ element }}
    </li>
  </ul>
  
  <hr></hr>
</template>

<style scoped>
</style>
