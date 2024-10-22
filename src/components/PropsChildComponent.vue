<template>
  <div>
    <h4>父组件向子组件传值（Props）-子组件</h4>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: String,  // message 要求为字符串
  count: Number     // count 要求为数字
});
</script>