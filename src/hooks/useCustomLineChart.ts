import { computed, ref } from "vue";
import { useLineChart } from "vue-chart-3";
import { ChartData } from "chart.js";
import { findDoDItems } from "@/apis/DoDApi"

export const useCustomLineChart = () => {
  const longMethodData = ref({data: [{date: '', value: 0}]});
  const chartData = computed<ChartData<"line">>(() => (
    {
      labels: longMethodData.value.data.map(row=>row.date),
      datasets: [ { data: longMethodData.value.data.map(row=>row.value), } ],
    }
  ));
  const { lineChartProps } = useLineChart({ chartData: chartData });
  const load = async () => {
    const dodItems = await findDoDItems()
    longMethodData.value = dodItems.items[0]
    return
  }
  load()
  return lineChartProps
}