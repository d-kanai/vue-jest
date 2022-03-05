import 'jest-canvas-mock';
import * as api from "@/apis/DoDApi";
import { DoDList } from "@/apis/DoDApi";
import { mountWithFlushPromise } from "@/../tests/unit/helper"
import DoDListPage from "@/views/DoDList.vue"

function mockDoDListApi() {
  const response = {
    items: [
      {
        name: "Long Method Mock",
        data: [
          { id: 1, date: "2020-01-01", value: 10, comment: 'something'},
          { id: 2, date: "2020-01-02", value: 20, comment: 'something'},
          { id: 3, date: "2020-01-03", value: 30, comment: 'something'},
        ]
      },
      {
        name: "Coverage Mock",
        data: [
          { id: 1, date: "2020-01-01", value: 81, comment: 'something'},
          { id: 2, date: "2020-01-02", value: 80, comment: 'something'},
          { id: 3, date: "2020-01-03", value: 90, comment: 'something'},
        ]
      }
    ]
  } as DoDList
  jest.spyOn(api, "findDoDList").mockResolvedValueOnce(response);
  return response
}

describe("DoDList.vue", () => {
  it("snapshot", async () => { })
  it("should show DoD List", async () => {
    //given
    mockDoDListApi()
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    //then
    expect(wrapper.text()).toMatch("Long Method");
    expect(wrapper.text()).toMatch("Coverage");
  });
});
