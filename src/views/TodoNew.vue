<template>
  <div>
    <p>New Todo</p>
    <form @submit.prevent="onSubmit">
      <TextField v-model="title" label="title" :error="titleError" />
      <TextField v-model="assignee" label="assignee" :error="assigneeError" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import TextField from "@/views/TextField";
import { useField } from "vee-validate";

export default {
  components: { TextField },
  setup() {
    async function onSubmit() {
      console.log(title, assignee);
      return false;
    }
    const title = useField("title", function (value) {
      if (!value) return "This field is required";
      return true;
    });
    const assignee = useField("assignee", function (value) {
      if (!value) return "This field is required";
      return true;
    });
    return {
      onSubmit: onSubmit,
      title: title.value,
      assignee: assignee.value,
      titleError: title.errorMessage,
      assigneeError: assignee.errorMessage,
    };
  },
};
</script>
