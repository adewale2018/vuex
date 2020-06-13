<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item">
        <input type="checkbox" class="mr-3" @change="toggleTodoStatus()" />
        <span :class="{completed: todo.completed}">{{ todo.title}}</span>
        <button @click="deleteTodo" class="ml-5 btn btn-danger">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],

  methods: {
    deleteTodo: function() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    toggleTodoStatus: function() {
      this.$store.dispatch("toggleTodoStatus", this.todo);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>