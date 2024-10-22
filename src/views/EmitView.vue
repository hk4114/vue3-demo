<template>
  <ChildComponent @sendMessage="handleMessage" />
  <p>{{ receivedMessage }}</p>
</template>

<script setup>
import ChildComponent from '../components/EmitChildComponent.vue';
import { ref } from 'vue';

const receivedMessage = ref('');

function handleMessage(message) {
  receivedMessage.value = message;
}
</script>
