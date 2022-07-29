<template>
  <p>{{ counter }}</p>
  <div>
    <button @click="increaseCounter">+</button>
    <button @click="decreaseCounter">-</button>
  </div>

  <h1 v-if="isLoading === true">Loading...</h1>

  <ul class="todoList">
    <li
      class="todoItem"
      v-bind:class="{ isActive: index % 2 === 0 }"
      v-for="(todo, index) in todos"
      :key="todo.id"
    >
      {{ todo.id }}: {{ todo.title }}
    </li>
  </ul>
</template>

<script lang="ts">
export { default } from "./home";
</script>

<style lang="scss">
@import "./home.scss";
</style>
