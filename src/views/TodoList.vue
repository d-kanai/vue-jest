<template>
  <div>
    <div>
      <input name="searchWord" v-model="searchWord" />
      <TodoListItem
        v-for="todo in searchedTodoList"
        :key="todo.id"
        :todo="todo"
        @updateStatus="updateStatus(todo)"
      />
    </div>
  </div>
</template>

<script>
import { getTodoList, updateTodoStatus } from "@/apis/TodoApi";
import TodoListItem from "@/views/TodoListItem";

export default {
  components: { TodoListItem },
  data() {
    return {
      todoList: [],
      searchWord: "",
    };
  },
  async created() {
    this.todoList = await getTodoList();
  },
  computed: {
    searchedTodoList() {
      return this.todoList.filter((todo) =>
        todo.name.includes(this.searchWord)
      );
    },
  },
  methods: {
    async updateStatus(todo) {
      await updateTodoStatus(todo.id, todo.status);
    },
  },
};
</script>
