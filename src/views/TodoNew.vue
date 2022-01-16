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
import TextField from "@/views/TextField";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  components: { TextField },
  setup() {
    const { handleSubmit, errors } = useForm({
      validationSchema: yup.object({
        title: yup.string().required("required").min(3),
        assignee: yup.string().required("required").min(3),
      }),
    });
    return {
      title: useField("title").value,
      assignee: useField("assignee").value,
      onSubmit: handleSubmit((values) => {
        console.log("submit", values);
      }),
      errors: errors,
    };
  },
};
</script>
