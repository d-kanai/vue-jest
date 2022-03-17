<template>
  <div>
    <section id="dodRecord" class="section">
      <h3 class="subtitle">DoDDetail</h3>
      <h3 class="subtitle">DoD Record</h3>
      <DoDRecordListTable :dodRecordList="dodRecordList" />
      <hr />
      <form id="dodRecordForm" @submit="onDoDRecordSubmit">
        <TextField v-model="dodRecordFormData.date.value" label="date" :error="dodRecordErrors.date" />
        <TextField v-model="dodRecordFormData.value.value" label="value" :error="dodRecordErrors.value" />
        <TextField v-model="dodRecordFormData.comment.value" label="comment" :error="dodRecordErrors.comment" />
        <Button label="Create DoD Record" />
      </form>
    </section>
  </div>
</template>

<script>
//@IMPROVE use typescript

import TextField from "@/components/atoms/TextField";
import Button from "@/components/atoms/Button";
import DoDRecordListTable from "@/components/DoDList/DoDRecordListTable";
import { createDoDRecord } from "@/apis/DoDApi";
import { useDoDRecordForm } from "@/hooks/useDoDRecordForm";
import { ref } from "vue";
import { useRoute } from 'vue-router'


export default {
  name: "App",
  components: { Button, TextField, DoDRecordListTable },
  setup() {
    const dodRecordList = ref([]);
    const { onDoDRecordSubmit, dodRecordErrors, dodRecordFormData } = useDoDRecordForm();
    const route = useRoute()
    return {
      dodRecordList,
      dodRecordFormData,
      dodRecordErrors: dodRecordErrors,
      onDoDRecordSubmit: onDoDRecordSubmit((formData) => {
        createDoDRecord({ ...formData, dodId: parseInt(route.params.id) });
        dodRecordList.value.push({ ...formData });
      }),
    };
  },
};
</script>

<style></style>
