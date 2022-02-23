<template>
  <div>
    <div v-for="chartData in chartDataList" :key="chartData.label">
      <LineChart v-bind="chartData" />
    </div>
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
