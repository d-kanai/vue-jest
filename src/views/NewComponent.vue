<template>
  <input type="checkbox" v-model="todo.status" @change="this.updateStatus(todo)" />
  <router-link
    :to="{name: 'Todo', params: {id: todo.id}}"

  >
    <span>{{ todo.name }}</span>
  </router-link>
</template>
<script>
export default {
  name: "NewComponent",
  props: {
    todo: {}
  }
};
</script>
