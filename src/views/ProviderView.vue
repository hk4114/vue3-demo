<template>
  <ChildComponent />
</template>

<script setup>
import ChildComponent from '../components/ProviderChildComponent.vue';
import { provide } from 'vue';

const sharedData = "Shared data from GrandParent";
provide('sharedData', sharedData);
</script>