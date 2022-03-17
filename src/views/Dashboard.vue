<template>
  <div>
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

Chart.register(...registerables);

export default {
  name: "Dashboard",
  components: { LineChart },
  setup() {
    const { chartDataList } = useDoDListLineChart();
    return { chartDataList };
  },
};
</script>

<style></style>
