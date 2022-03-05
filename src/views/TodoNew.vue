<template>
  <div>
    <p>New Todo</p>
    <form @submit="onSubmit">
      <TextField v-model="title" label="title" :error="errors.title" />
      <TextField v-model="assignee" label="assignee" :error="errors.assignee" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import TextField from "@/components/TextField";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { createTodo } from "@/apis/TodoApi";

export default {
  components: { TextField },
  setup() {
    const { handleSubmit, errors } = useForm({
      validationSchema: yup.object({
        title: yup.string().required("title is required").max(20),
        assignee: yup.string().required("assignee is required").max(20),
      }),
    });
    return {
      title: useField("title").value,
      assignee: useField("assignee").value,
      onSubmit: handleSubmit((formData) => {
        createTodo()
      }),
      errors: errors,
    };
  },
};
</script>
