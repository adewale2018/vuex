<template>
  <div class="container">
    <h3 class="text-center py-3">Todo App with Vuex</h3>
    <div class="row">
      <div>
        <h3>Completed: {{ completedTodos }}</h3>
        <h3>Pending: {{ pendingTodos}}</h3>
      </div>

      <div class="col-sm-8">
        <Todo v-for="(todo,i) in todos" :key="i" :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  components: {
    Todo
  },
  computed: {
    todos: function() {
      return this.$store.state.todos;
    },
    completedTodos: function() {
      return this.$store.getters.completedTodos;
    },
    pendingTodos: function() {
      return this.$store.getters.pendingTodos;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-transform: uppercase;
  font-weight: 800;
  color: black;
  letter-spacing: 0.1rem;
}
</style>
