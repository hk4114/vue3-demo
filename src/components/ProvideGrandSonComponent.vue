<template>
  <p>{{ data }}</p>
</template>

<script setup>
import { inject } from 'vue';

const data = inject('sharedData');
</script>