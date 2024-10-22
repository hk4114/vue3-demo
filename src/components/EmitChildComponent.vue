<template>
  <button @click="sendMessageToParent">Send Message</button>
</template>

<script setup>
const emit = defineEmits(['sendMessage']);

function sendMessageToParent() {
  emit('sendMessage', 'Hello from Child');
}
</script>