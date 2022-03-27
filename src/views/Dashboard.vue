<template>
  <div>
    <div class="modal" :class="{'is-active': modalIsActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="columns">
          <div class="column">
            <DoDListTable :dodList="dodList" @selectDoD="selectDoD" />
            <hr />
            <DoDForm @onSubmit="onSubmit" />
          </div>
          <div class="column">
            <DoDRecordListTable :dodRecordList="dodRecordList" />
            <hr />
            <DoDRecordForm @onSubmit="onDoDRecordSubmit" />
          </div>
        </div>
      </div>
      <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
    </div>
    <Button @click="openModal" label="Data Controll" />
    <section class="section">
      <h3 class="subtitle">Dashboard</h3>
      <div v-for="chartData in chartDataList" :key="chartData.label">
        <LineChart v-bind="chartData" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import DoDRecordListTable from "@/components/DoD/DoDRecordListTable.vue";
import DoDRecordForm from "@/components/DoD/DoDRecordForm.vue";
import { useDoDRecordList } from "@/hooks/useDoDRecordList"
import { createDoDRecord } from "@/apis/DoDApi";
import DoDListTable from "@/components/DoD/DoDListTable.vue";
import { useDoDList } from "@/hooks/useDoDList";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { useDoDListLineChart } from "@/hooks/useDoDListLineChart";
import { defineComponent } from 'vue'
import { ref } from "vue";
import DoDForm from "@/components/DoD/DoDForm.vue";
import Button from "@/components/atoms/Button.vue";
import { createDoD } from "@/apis/DoDApi";

Chart.register(...registerables);

export default defineComponent({
  name: "Dashboard",
  components: { DoDRecordListTable, DoDRecordForm,  LineChart, DoDForm, DoDListTable, Button },
  setup() {
    const dodList = useDoDList();
    const modalIsActive = ref(false)
    const { chartDataList } = useDoDListLineChart();
    const openModal = () => {
      modalIsActive.value = true
    }
    const closeModal = () => {
      modalIsActive.value = false
    }
    const {dodRecordList, selectDoD, dodId} = useDoDRecordList();
    return {
      dodList,
      onSubmit: async (formData:any) => {
        const dod = await createDoD(formData);
        dodList.value.items.push(dod);
      },
      dodRecordList,
      selectDoD: selectDoD,
      onDoDRecordSubmit: async (formData:any) => {
        const dodRecord = await createDoDRecord({ ...formData, dodId: dodId.value });
        dodRecordList.value.items.push(dodRecord);
      },
      chartDataList,
      modalIsActive,
      openModal,
      closeModal,
    };

  },
});
</script>

<style>
.modal-content {
  width: 80%;
  height: 80%;
  background: white;
  border-radius: 8px;
}
</style>

