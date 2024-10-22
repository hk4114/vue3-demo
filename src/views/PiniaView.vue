<template>
  <div>
    <p>是一个简单的 counter store，使用 state 来定义状态，用 actions 来定义业务逻辑。</p>
    <p>Current Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
const { count, increment } = counterStore;
</script>
