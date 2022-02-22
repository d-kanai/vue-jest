<template>
  <div>
    <div style="display: flex; justify-content: center">
      <button type="button" @click="shuffleData">Shuffle</button>
      <button type="button" @click="switchLegend">Swicth legends</button>
    </div>
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script lang='ts'>

import { computed, ref } from "vue";
import { shuffle } from "lodash";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "App",
  components: { LineChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);

    const testData = computed<ChartData<"line">>(() => ({
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      name: '',
      datasets: [ { data: dataValues.value, } ],
    }));

    const options = computed<ChartOptions<"line">>(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData: testData,
      options,
    });

    function shuffleData() {
      dataValues.value = shuffle(dataValues.value);
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      lineChartRef,
      lineChartProps,
    };
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
