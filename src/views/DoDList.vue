<template>
  <div>
    <section class="section">
      <h3 class="subtitle">DoDList</h3>
      <DoDListTable :dodList="dodList" />
      <hr />
      <DoDForm @onSubmit="onSubmit" />
    </section>
  </div>
</template>

<script lang='ts'>
import DoDListTable from "@/components/DoDList/DoDListTable.vue";
import DoDForm from "@/components/DoDList/DoDForm.vue";
import { createDoD } from "@/apis/DoDApi";
import { useDoDList } from "@/hooks/useDoDList";

export default {
  name: "DoDList",
  components: { DoDListTable, DoDForm },
  setup() {
    const dodList = useDoDList();
    return {
      dodList,
      onSubmit: async (formData:any) => {
        const dod = await createDoD(formData);
        dodList.value.items.push(dod);
      },
    };
  },
};
</script>

<style></style>
