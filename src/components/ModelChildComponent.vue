<template>
  <div>
    <input :value="text" @input="$emit('update:text', $event.target.value)" />
    <input type="number" :value="number" @input="$emit('update:number', $event.target.value)" />
  </div>
</template>

<script setup>
defineProps({
  text: String | Number,
  number: String | Number
});

defineEmits(['update:text', 'update:number']);
</script>