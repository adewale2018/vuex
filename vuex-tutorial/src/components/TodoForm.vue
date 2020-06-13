<template>
  <div class="mt-4">
    <h3>Add New Task</h3>
    <form @submit.prevent="addNewTodoItem()">
      <input type="text" placeholder="Enter a new todo..." v-model="todoNewTitle" required />
      <button class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todoNewTitle: ""
    };
  },
  methods: {
    addNewTodoItem: function() {
      if (this.todoNewTitle.length > 0 && this.todoNewTitle.trim() !== "") {
        this.$store.dispatch("addNewTodo", this.todoNewTitle);
      }
      this.todoNewTitle = "";
    }
  }
};
</script>

<style scoped>
h3 {
  text-transform: uppercase;
  font-weight: 800;
  color: black;
  letter-spacing: .1rem;
}
</style>