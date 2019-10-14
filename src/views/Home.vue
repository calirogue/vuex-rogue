<template>
  <div class="home">
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";

export default {
  name: "home",
  components: {
    Todos
  }
};
</script>
