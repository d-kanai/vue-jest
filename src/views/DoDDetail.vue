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

<script lang='ts'>
import DoDRecordListTable from "@/components/DoDList/DoDRecordListTable.vue";
import DoDRecordForm from "@/components/DoDList/DoDRecordForm.vue";
import { createDoDRecord, DoDRecord } from "@/apis/DoDApi";
import { ref, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: "DoDDetail",
  components: { DoDRecordListTable, DoDRecordForm },
  setup() {
    const dodRecordList = ref([] as DoDRecord[]);
    const route = useRoute()
    return {
      dodRecordList,
      onSubmit: async (formData:any) => {
        const dodRecord = await createDoDRecord({ ...formData, dodId: parseInt(route.params.id as string) });
        dodRecordList.value.push(dodRecord);
      },
    };
  },
)};
</script>

<style></style>
