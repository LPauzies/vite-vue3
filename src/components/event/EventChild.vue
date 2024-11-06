<script setup lang="ts">

const emit = defineEmits(['message'])

function sendEvent() {
  emit('message', {from: "EventChild.vue", value: Math.floor(Math.random() * 10)})
}

</script>

<template>
    <div>
        <h3>Child Component</h3>
        <button @click="sendEvent">Send Event</button>
  </div>
</template>

<style scoped>
</style>
