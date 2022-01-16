<template>
  <div>
    <input
      type="checkbox"
      v-model="todo.status"
      @change="this.$emit('updateStatus', todo)"
    />
    <router-link :to="{ name: 'Todo', params: { id: todo.id } }">
      <span>{{ todo.name }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {},
  },
};
</script>
