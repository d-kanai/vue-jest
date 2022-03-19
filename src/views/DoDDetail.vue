<template>
  <div>
    <section id="dodRecord" class="section">
      <h3 class="subtitle">DoD Detail</h3>
      <DoDRecordListTable :dodRecordList="dodRecordList" />
      <hr />
      <DoDRecordForm @onSubmit="onSubmit" />
    </section>
  </div>
</template>

<script>
//@IMPROVE use typescript
import DoDRecordListTable from "@/components/DoDList/DoDRecordListTable.vue";
import DoDRecordForm from "@/components/DoDList/DoDRecordForm.vue";
import { createDoDRecord } from "@/apis/DoDApi";
import { ref } from "vue";
import { useRoute } from 'vue-router'

export default {
  name: "DoDDetail",
  components: { DoDRecordListTable, DoDRecordForm },
  setup() {
    const dodRecordList = ref([]);
    const route = useRoute()
    return {
      dodRecordList,
      onSubmit: async (formData) => {
        const dodRecord = await createDoDRecord({ ...formData, dodId: parseInt(route.params.id) });
        dodRecordList.value.push(dodRecord);
      },
    };
  },
};
</script>

<style></style>
