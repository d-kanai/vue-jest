<template>
  <div>
    <section id="dodRecord" class="section">
      <h3 class="subtitle">DoD Detail</h3>
      <DoDRecordListTable :dodRecordList="dodRecordList" />
      <hr />
      <form id="dodRecordForm" @submit="onSubmit">
        <TextField v-model="formData.date.value" label="date" :error="errors.date" />
        <TextField v-model="formData.value.value" label="value" :error="errors.value" />
        <TextField v-model="formData.comment.value" label="comment" :error="errors.comment" />
        <Button label="Create DoD Record" />
      </form>
    </section>
  </div>
</template>

<script>
//@IMPROVE use typescript
import TextField from "@/components/atoms/TextField.vue";
import Button from "@/components/atoms/Button.vue";
import DoDRecordListTable from "@/components/DoDList/DoDRecordListTable.vue";
import { createDoDRecord } from "@/apis/DoDApi";
import { useDoDRecordForm } from "@/hooks/useDoDRecordForm";
import { ref } from "vue";
import { useRoute } from 'vue-router'

export default {
  name: "DoDDetail",
  components: { Button, TextField, DoDRecordListTable },
  setup() {
    const dodRecordList = ref([]);
    const { onSubmit, formData, errors } = useDoDRecordForm();
    const route = useRoute()
    return {
      dodRecordList,
      formData,
      errors,
      onSubmit: onSubmit((formData) => {
        createDoDRecord({ ...formData, dodId: parseInt(route.params.id) });
        dodRecordList.value.push({ ...formData });
      }),
    };
  },
};
</script>

<style></style>
