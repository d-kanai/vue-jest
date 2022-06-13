<template>
  <div>
    <Button @click="modal.open" label="Data Controll" />
    <div class="modal" :class="{ 'is-active': modal.isActive.value }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="columns m-5">
          <div class="column">
            <DoDListTable :dodList="dodList" @selectDoD="selectDoD" />
            <hr />
            <DoDForm @onSubmit="onDoDSubmit" />
          </div>
          <div class="column">
            <DoDRecordListTable :dodRecordList="dodRecordList" />
            <hr />
            <DoDRecordForm @onSubmit="onDoDRecordSubmit" />
          </div>
        </div>
      </div>
      <button
        @click="modal.close"
        class="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { createDoD } from "@/apis/DoDApi";
import { createDoDRecord } from "@/apis/DoDApi";
import { useModal } from "@/hooks/useModal";
import { useDoDList } from "@/hooks/useDoDList";
import { useDoDRecordList } from "@/hooks/useDoDRecordList";
import Button from "@/components/atoms/Button.vue";
import DoDRecordListTable from "@/components/DoD/DoDRecordListTable.vue";
import DoDListTable from "@/components/DoD/DoDListTable.vue";
import DoDRecordForm from "@/components/DoD/DoDRecordForm.vue";
import DoDForm from "@/components/DoD/DoDForm.vue";

export default defineComponent({
  name: "DoDModal",
  components: {
    DoDRecordListTable,
    DoDRecordForm,
    DoDForm,
    DoDListTable,
    Button,
  },
  props: {},
  setup(props, context) {
    const modal = useModal();
    const dodList = useDoDList();
    const { dodRecordList, selectDoD, dodId } = useDoDRecordList();
    return {
      modal,
      dodList,
      onDoDSubmit: async (formData: any) => {
        const dod = await createDoD(formData);
        dodList.value.items.push(dod);
      },
      dodRecordList,
      selectDoD: selectDoD,
      onDoDRecordSubmit: async (formData: any) => {
        const dodRecord = await createDoDRecord({
          ...formData,
          dodId: dodId.value,
        });
        dodRecordList.value.items.push(dodRecord);
      },
    };
  },
});
</script>
<style></style>
