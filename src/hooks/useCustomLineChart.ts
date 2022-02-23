import { computed, ref } from "vue";
import { useLineChart } from "vue-chart-3";
import { findDoDItems, DoDItems } from "@/apis/DoDApi"

export const useCustomLineChart = () => {
  const rawData = ref({items: []} as DoDItems);

  const chartDataList = computed(() => {
    return rawData.value.items.map(item => {
      const chartData = {
        labels: item.data.map(row=>row.date),
        datasets: [ {
           label: item.name,
           data: item.data.map(row=>row.value)
        }],
      }
      const { lineChartProps } = useLineChart({ chartData: chartData});
      return lineChartProps.value
    })
  });

  const load = async () => {
    rawData.value = await findDoDItems()
  }
  load()

  return { chartDataList }
}