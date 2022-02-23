import { computed, ref } from "vue";
import { useLineChart } from "vue-chart-3";
import { ChartData } from "chart.js";
import { findDoDItems, DoDItems } from "@/apis/DoDApi"

export const useCustomLineChart = () => {
  const rawData = ref({items: []} as DoDItems);

  const chartData = computed(() => {
    const a = {
      labels: rawData.value.items[0]?.data.map(row=>row.date),
      datasets: [ {
         label: rawData.value.items[0]?.name,
         data: rawData.value.items[0]?.data.map(row=>row.value)
      }],
    }
    const { lineChartProps } = useLineChart({ chartData: a});
    console.log(lineChartProps.value)
    return lineChartProps.value
  });

  const load = async () => {
    rawData.value = await findDoDItems()
    return
  }
  load()

  return {chartData, rawData}
}