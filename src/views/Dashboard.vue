<template>
  <div>
    <DoDModal />
    <section class="section">
      <h3 class="subtitle">Dashboard</h3>
      <div v-for="chartData in chartDataList" :key="chartData.label">
        <LineChart v-bind="chartData" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { useDoDListLineChart } from "@/hooks/useDoDListLineChart";
import { defineComponent } from "vue";
import DoDModal from "@/components/DoD/DoDModal.vue";

Chart.register(...registerables);

export default defineComponent({
  name: "Dashboard",
  components: { LineChart, DoDModal },
  setup() {
    const { chartDataList } = useDoDListLineChart();
    return {
      chartDataList,
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
