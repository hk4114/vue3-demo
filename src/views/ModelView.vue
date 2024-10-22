<template>
  <p>在 Vue 3 中，v-model 得到了增强，允许为组件创建多个 v-model 绑定属性，使得数据流更加灵活和方便。</p>
  <p>在父组件中，通过 v-model:text 和 v-model:number 可以分别绑定两个不同的值。</p>
  <p>子组件通过 emit 和 update 事件实现与父组件的数据同步，形成双向绑定的效果。</p>
  <CustomInput v-model:text="textValue" v-model:number="numberValue" />
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from '../components/ModelChildComponent.vue';

const textValue = ref('Default text');
const numberValue = ref(42);
</script>