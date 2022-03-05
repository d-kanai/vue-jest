<template>
  <div>
    <section class="section">
      <h3 class="subtitle">DoDList</h3>
      <p v-for="dod in dodList.items" :key="dod">{{dod.name}}</p>
      <form @submit="onSubmit">
        <TextField v-model="name" label="name" :error="errors.name" />
        <button type="submit">Create DoD</button>
      </form>
    </section>
  </div>
</template>

<script>

import TextField from "@/components/TextField";
import { createDoD } from "@/apis/DoDApi"
import { useDoDForm } from "@/hooks/useDoDForm"
import { useDoDList } from "@/hooks/useDoDList"

export default {
  name: "App",
  components: { TextField },
  setup() {
    const dodList = useDoDList()
    const { handleSubmit, errors, name } = useDoDForm()
    return {
      dodList,
      name: name,
      errors: errors,
      onSubmit: handleSubmit((formData) => {
        createDoD(formData)
        dodList.value.items.push({name: formData.name})
      })
    }
  },
};
</script>

<style>
</style>
