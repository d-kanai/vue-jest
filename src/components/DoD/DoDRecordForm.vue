<template>
  <form id="dodRecordForm" @submit="onSubmit">
    <TextField v-model="formData.date.value" label="date" :error="errors.date" />
    <TextField v-model="formData.value.value" label="value" :error="errors.value" />
    <TextField v-model="formData.comment.value" label="comment" :error="errors.comment" />
    <Button label="Create DoD Record" />
  </form>
</template>
<script>
import TextField from "@/components/atoms/TextField.vue";
import Button from "@/components/atoms/Button.vue";
import { useDoDRecordForm } from "@/hooks/useDoDRecordForm";
export default {
  name: "DoDRecordForm",
  components: { Button, TextField },
  props: { },
  setup(props, context) {
    const { onSubmit, formData, errors } = useDoDRecordForm();
    return {
      formData,
      errors,
      onSubmit: onSubmit(async (formData) => {
        context.emit("onSubmit", formData)
      }),
    };
  },
};
</script>
<style></style>
