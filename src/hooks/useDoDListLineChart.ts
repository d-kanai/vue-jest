import { computed, ref } from "vue";
import { useLineChart } from "vue-chart-3";
import { findDoDList, DoDList } from "@/apis/DoDApi";

export const useDoDListLineChart = () => {
  const rawData = ref({ items: [] } as DoDList);

  const chartDataList = computed(() => {
    return rawData.value.items.map((item) => {
      let chartData:any
      if(!item.data) {
        chartData = {}
      } else {
        chartData = {
          labels: item.data.map((row) => row.date),
          datasets: [
            {
              label: item.name,
              data: item.data.map((row) => row.value),
            },
          ],
        };
      }
      const { lineChartProps } = useLineChart({ chartData: chartData });
      return lineChartProps.value;
    });
  });

  const load = async () => {
    rawData.value = await findDoDList();
  };
  load();

  return { chartDataList };
};
