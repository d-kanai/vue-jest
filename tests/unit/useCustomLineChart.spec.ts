import { useCustomLineChart } from "@/hooks/useCustomLineChart";
import { flushPromises } from "@vue/test-utils";

describe("useCustomLineChart", () => {
  it("xxx", async () => {
    //when
    const actual = useCustomLineChart()
    await flushPromises();
    //then
    expect(actual.chartDataList.value.length).toEqual(2)
    expect(actual.chartDataList.value[0].chartData.datasets[0].label).toEqual('Long Method')
  });
});
