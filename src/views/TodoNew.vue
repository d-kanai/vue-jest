<template>
  <div>
    <p>New Todo</p>
    <form @submit.prevent>
      <TextField v-model="todo.title" label="title" />
      <TextField v-model="todo.assignee" label="assignee" />
      <button @click="this.submit">submit</button>
    </form>
  </div>
</template>

<script>
import TextField from "@/views/TextField";

export default {
  components: { TextField },
  data() {
    return {
      todo: {
        title: "",
        assignee: "",
      },
    };
  },
  methods: {
    async submit() {
      console.log(this.todo);
      return false;
    },
  },
};
</script>
