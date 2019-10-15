<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="add todo">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #ffdaff;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #0f0f0f;
  color: #ffffff;
  border: 1px #da8608 solid;
  cursor: pointer;
}

</style>