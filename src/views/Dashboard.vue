<template>
  <div>
    <LineChart v-bind="lineChartProps" />
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
    const lineChartProps = useCustomLineChart()
    const lineChartProps2 = useCustomLineChart()
    return { lineChartProps, lineChartProps2 }
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
