import { useDoDListLineChart } from "@/hooks/useDoDListLineChart";
import "jest-canvas-mock";
import { flushPromises } from "@vue/test-utils";
import { mountWithFlushPromise } from "@/../tests/unit/helper";
import Dashboard from "@/views/Dashboard.vue";
import { mockDoDListApi } from "@/../tests/unit/mockApi"

describe("useDoDListLineChart", () => {
  it("should find computed ChartData From DoDListAPI", async () => {
    //given
    mockDoDListApi();
    //when
    const actual = useDoDListLineChart();
    await flushPromises();
    //then
    expect(actual.chartDataList.value.length).toEqual(2);
    expect(actual.chartDataList.value[0].chartData.datasets[0].label).toEqual("Long Method Mock");
    expect(actual.chartDataList.value[0].chartData.datasets[0].data).toEqual([10, 20, 30]);
    expect(actual.chartDataList.value[1].chartData.datasets[0].label).toEqual("Coverage Mock");
    expect(actual.chartDataList.value[1].chartData.datasets[0].data).toEqual([40, 50, 60]);
  });
  it("should not error when DoD Record empty", async () => {
    //given
    const items = [
      {
        id: 1,
        name: "Long Method Mock",
        data: null,
      },
      {
        id: 2,
        name: "Coverage Mock",
        data: [
          { id: 1, date: "2022-01-01", value: 81, comment: "something" },
          { id: 2, date: "2022-01-02", value: 80, comment: "something" },
          { id: 3, date: "2022-01-03", value: 90, comment: "something" },
        ],
      },
    ]
    mockDoDListApi(items);
    //when
    const actual = useDoDListLineChart();
    await flushPromises();
    //then
    expect(actual.chartDataList.value.length).toEqual(2);
    expect(actual.chartDataList.value[1].chartData.datasets[0].label).toEqual("Coverage Mock");
  });

});
