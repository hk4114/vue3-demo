<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">父组件向子组件传值</RouterLink>
        <RouterLink to="/emit">子组件向父组件传值</RouterLink>
        <RouterLink to="/provider">跨级组件传值</RouterLink>
        <RouterLink to="/pinia">全局状态管理</RouterLink>
        <RouterLink to="/model">v-model 实现双向绑定</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  border-bottom: 1px solid #eaecef;
  display: flex;
  justify-content: space-between;
}

.router-link-active {
  
}
</style>
