<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { useQueryProvider } from "vue-query";
useQueryProvider();
</script>

<style lang="scss">
@import "./styles/reset";
@import "./styles/base";
</style>
