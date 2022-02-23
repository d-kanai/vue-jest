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

<script lang='ts'>
import { LineChart } from "vue-chart-3"
import { Chart, registerables } from "chart.js"
import { useDoDItemsLineChart } from "@/hooks/useDoDItemsLineChart"

Chart.register(...registerables);

export default {
  name: "App",
  components: { LineChart },
  setup() {
    const { chartDataList } = useDoDItemsLineChart()
    return { chartDataList }
  },
};
</script>

<style>
</style>
