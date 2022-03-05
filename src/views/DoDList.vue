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
import * as yup from "yup";
import { findDoDList, DoDList } from "@/apis/DoDApi"
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import { createDoD } from "@/apis/DoDApi"
import { useDoDForm } from "@/hooks/useDoDForm"

export default {
  name: "App",
  components: { TextField },
  setup() {
    const dodList = ref({items: []});
    const load = async () => {
      dodList.value = await findDoDList()
    }
    load()

    const { handleSubmit, errors, name} = useDoDForm()

    return {
      dodList,
      name: name,
      errors: errors,
      onSubmit: handleSubmit((formData) => {
        console.log("submit", formData);
        createDoD(formData)
        dodList.value.items.push({name: formData.name})
      })
    }
  },
};
</script>

<style>
</style>
