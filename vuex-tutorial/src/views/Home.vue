<template>
  <div class="home">
    <todo-list />
    <todo-form />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: "Home",
  components: {
    TodoList,
    TodoForm
  }
};
</script>
