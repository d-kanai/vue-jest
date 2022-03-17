<template>
  <div>
    <section class="section">
      <h3 class="subtitle">DoDList</h3>
      <DoDListTable :dodList="dodList" />
      <hr />
      <form @submit="onDoDSubmit">
        <TextField v-model="dodFormData.name.value" label="name" :error="dodFormErrors.name" />
        <Button label="Create DoD" />
      </form>
    </section>
  </div>
</template>

<script>
//@IMPROVE use typescript

import TextField from "@/components/atoms/TextField";
import Button from "@/components/atoms/Button";
import DoDListTable from "@/components/DoDList/DoDListTable";
import { createDoD } from "@/apis/DoDApi";
import { useDoDForm } from "@/hooks/useDoDForm";
import { useDoDList } from "@/hooks/useDoDList";

export default {
  name: "App",
  components: { Button, TextField, DoDListTable },
  setup() {
    const dodList = useDoDList();
    const { onDoDSubmit, dodFormErrors, dodFormData } = useDoDForm();
    return {
      dodList,
      dodFormData,
      dodFormErrors,
      onDoDSubmit: onDoDSubmit(async (formData) => {
        const dod = await createDoD(formData);
        dodList.value.items.push(dod);
      }),
    };
  },
};
</script>

<style></style>
