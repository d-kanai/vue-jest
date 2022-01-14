<template>
  <div>
    <div>
      <input name="searchWord" v-model="searchWord" />
      <div v-for="todo in searchedTodoList" :key="todo.id">
        <input type="checkbox" v-model="todo.status" @change="this.updateStatus(todo)" />
        <router-link
          :to="{name: 'Todo', params: {id: todo.id}}"

        >
          <span>{{ todo.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getTodoList, updateTodoStatus } from "@/apis/TodoApi";

export default {
  data() {
    return {
      todoList: [],
      searchWord: ""
    };
  },
  async created() {
    this.todoList = await getTodoList();
  },
  computed: {
    searchedTodoList() {
      return this
        .todoList
        .filter(todo => todo.name.includes(this.searchWord));
    }
  }, methods: {
    async updateStatus(todo) {
      await updateTodoStatus(todo.id, todo.status)
    }
  }
};
</script>

<style scoped></style>
