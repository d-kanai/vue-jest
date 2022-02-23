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
import { useCustomLineChart } from "@/hooks/useCustomLineChart"

Chart.register(...registerables);

export default {
  name: "App",
  components: { LineChart },
  setup() {
    const { chartDataList } = useCustomLineChart()
    return { chartDataList }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
