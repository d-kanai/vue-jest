import { useDoDListLineChart } from "@/hooks/useDoDListLineChart";
import "jest-canvas-mock";
import * as api from "@/apis/DoDApi";
import { DoDList } from "@/apis/DoDApi";
import { flushPromises } from "@vue/test-utils";
import { mountWithFlushPromise } from "@/../tests/unit/helper";
import Dashboard from "@/views/Dashboard.vue";
import { mockDoDListApi } from "@/../tests/unit/mockApi"

describe("useDoDListLineChart", () => {
  it("snapshot", async () => {
    //given
    mockDoDListApi();
    //when
    const wrapper = await mountWithFlushPromise(Dashboard);
    //then
    expect(wrapper.element).toMatchSnapshot();
  });
  it("should find computed ChartData From DoDListAPI", async () => {
    //given
    mockDoDListApi();
    //when
    const actual = useDoDListLineChart();
    await flushPromises();
    //then
    expect(actual.chartDataList.value.length).toEqual(2);
    expect(actual.chartDataList.value[0].chartData.datasets[0].label).toEqual("Long Method Mock");
    expect(actual.chartDataList.value[1].chartData.datasets[0].label).toEqual("Coverage Mock");
  });
});
