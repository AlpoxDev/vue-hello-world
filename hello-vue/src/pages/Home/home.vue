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
      v-bind:class="{
        isSelected: selectedTodo?.id === todo.id,
        isCompleted: todo.completed,
      }"
      v-for="todo in todos"
      :key="todo.id"
      @click="() => handleSelectedTodo(todo)"
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
