<script setup lang="ts">
import { Ref, ref } from 'vue'
import EventChild from './EventChild.vue'

const receivedEvents: Ref<{event: string}[]> = ref([])

function handleEventChildMessage(event: {event: string}) {
  receivedEvents.value.push(event)
}

</script>

<template>
  <div>
    <h2>Parent Component</h2>
    <EventChild @message="handleEventChildMessage" />
    <li v-for="event in receivedEvents">
      {{ event }}
    </li>
  </div>
</template>

<style scoped>
</style>
