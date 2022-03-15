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
    <section id="dodRecord" class="section">
      <h3 class="subtitle">DoD Record</h3>
      <DoDRecordListTable :dodRecordList="dodRecordList" />
      <hr />
      <form id="dodRecordForm" @submit="onDoDRecordSubmit">
        <div class="field">
          <div class="select">
            <select v-model="dodRecordFormData.dodId.value" id="select-dod">
              <option value="1">Long Method</option>
            </select>
          </div>
        </div>
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
import DoDListTable from "@/components/DoDList/DoDListTable";
import DoDRecordListTable from "@/components/DoDList/DoDRecordListTable";
import { createDoD, createDoDRecord } from "@/apis/DoDApi";
import { useDoDForm } from "@/hooks/useDoDForm";
import { useDoDRecordForm } from "@/hooks/useDoDRecordForm";
import { useDoDList } from "@/hooks/useDoDList";
import { ref } from "vue";

export default {
  name: "App",
  components: { Button, TextField, DoDListTable, DoDRecordListTable },
  setup() {
    const dodList = useDoDList();
    const dodRecordList = ref([]);
    const { onDoDSubmit, dodFormErrors, dodFormData } = useDoDForm();
    const { onDoDRecordSubmit, dodRecordErrors, dodRecordFormData } = useDoDRecordForm();
    return {
      dodList,
      dodFormData,
      dodFormErrors,
      onDoDSubmit: onDoDSubmit((formData) => {
        createDoD(formData);
        dodList.value.items.push({ name: formData.name });
      }),
      dodRecordList,
      dodRecordFormData,
      dodRecordErrors: dodRecordErrors,
      onDoDRecordSubmit: onDoDRecordSubmit((formData) => {
        createDoDRecord({ ...formData, dodId: parseInt(formData.dodId) });
        dodRecordList.value.push({ ...formData });
      }),
    };
  },
};
</script>

<style></style>
