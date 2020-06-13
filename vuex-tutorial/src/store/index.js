import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "Attend the monthly Vue.js meetup", completed: false },
      { id: 2, title: "Complete the todo application", completed: false },
      { id: 3, title: "Eat and take a rest for 2hours", completed: false },
    ],
  },
  mutations: {
    NEW_TODO(state, todoItem) {
      const newTodo = {
        title: todoItem,
        completed: false,
        id: 4,
      };
      state.todos = [newTodo, ...state.todos];
      // state.todos.push({
      //   title: todoItem,
      //   completed: true,
      //   id: 4,
      // });
    },
    DELETE_TODO(state, todo) {
      // let index = state.todos.indexOf(todo);
      // state.todos.splice(index, 1);
      state.todos = state.todos.filter((td) => td !== todo);
    },
    TOGGLE_TODO_STATUS(state, todo) {
      todo.completed = !todo.completed;
    },
  },
  actions: {
    addNewTodo({ commit }, todoItem) {
      commit("NEW_TODO", todoItem);
    },
    deleteTodo({ commit }, todo) {
      commit("DELETE_TODO", todo);
    },
    toggleTodoStatus({ commit }, todo) {
      commit("TOGGLE_TODO_STATUS", todo);
    },
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((td) => td.completed === true).length;
    },
    pendingTodos(state) {
      return state.todos.filter((td) => td.completed === false).length;
    },
  },
});
