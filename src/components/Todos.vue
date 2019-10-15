<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click complete</span>
      <span>
        <span class="incomplete"></span> Incomplete
      </span>
      <span>
        <span class="complete"></span> Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" :key="todo.id" class="todo" v-bind:class="{'is-complete':todo.completed}">
        {{ todo.title }}
        <p @click="deleteTodo(todo.id)" class="trash">X</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    border: 1px solid #ffffff;
    background: #ffddaa;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .trash {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #ffffff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #0f0f0f;
  }
  .incomplete {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #f50c0c;
  }
  
  .is-complete {
    background: #f50c0c;
    color: #ffffff;
  }

  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>
