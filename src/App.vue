<template>
  <div class="home">
    <div class="container">
      <AddTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodos from "@/components/AddTodos.vue"
import Todos from "@/components/Todos.vue";

export default {
  name: "home",
  components: {
    Todos,
    AddTodos
  }
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>