<template>
    <div>
        <p>父组件向子组件传值（Props）-父组件</p>
    </div>
    <ChildComponent :message="parentMessage" :count="5" />
</template>

<script setup>
import ChildComponent from '../components/PropsChildComponent.vue';
const parentMessage = "Hello from Parent!";
</script>