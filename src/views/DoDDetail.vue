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
import DoDRecordListTable from "@/components/DoD/DoDRecordListTable.vue";
import DoDRecordForm from "@/components/DoD/DoDRecordForm.vue";
import { useDoDRecordList } from "@/hooks/useDoDRecordList"
import { createDoDRecord } from "@/apis/DoDApi";
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: "DoDDetail",
  components: { DoDRecordListTable, DoDRecordForm },
  setup() {
    const route = useRoute()
    const dodId = parseInt(route.params.id as string)
    const dodRecordList = useDoDRecordList(dodId);
    return {
      dodRecordList,
      onSubmit: async (formData:any) => {
        const dodRecord = await createDoDRecord({ ...formData, dodId: dodId });
        dodRecordList.value.items.push(dodRecord);
      },
    };
  },
});
</script>

<style></style>
