<template>
  <div>
    <section class="section">
      <h3 class="subtitle">DoDList</h3>
      <p v-for="dod in dodList.items" :key="dod">{{dod.name}}</p>
      <form @submit="onSubmit">
        <TextField v-model="name" label="name" />
        <input type="submit" value="Create DoD" />
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
import { createDoD } from "@/apis/DoDApi";

export default {
  name: "App",
  components: { TextField },
  setup() {
    const dodList = ref({items: []});
    const load = async () => {
      dodList.value = await findDoDList()
    }
    load()
    console.log(dodList.value)

    const { handleSubmit, errors } = useForm({
      validationSchema: yup.object({
        name: yup.string()
      }),
    });
    return {
      dodList,
      name: useField("name").value,
      onSubmit: handleSubmit((formData) => {
        console.log("submit", formData);
        createDoD(formData)
      })
    }
  },
};
</script>

<style>
</style>
