<template>
  <ChildComponent :message="parentMessage" :count="5" />
</template>

<script setup>
import ChildComponent from '../components/PropsChildComponent.vue';
const parentMessage = "Hello from Parent!";
</script>
