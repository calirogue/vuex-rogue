<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"])
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  background: #585252;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
