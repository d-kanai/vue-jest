<template>
  <form @submit="onSubmit">
    <TextField v-model="formData.name.value" label="name" :error="errors.name" />
    <Button id="dodFormSubmitButton" label="Create DoD" />
  </form>
</template>
<script lang='ts'>
import TextField from "@/components/atoms/TextField.vue";
import Button from "@/components/atoms/Button.vue";
import { useDoDForm } from "@/hooks/useDoDForm";
import { defineComponent } from 'vue'
export default defineComponent({
  name: "DoDForm",
  components: { Button, TextField },
  props: { },
  setup(props, context) {
    const { onSubmit, formData, errors } = useDoDForm();
    return {
      formData,
      errors,
      onSubmit: onSubmit(async (formData) => {
        context.emit("onSubmit", formData)
      }),
    };
  },
});
</script>
<style></style>
