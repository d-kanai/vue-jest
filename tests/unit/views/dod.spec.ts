import 'jest-canvas-mock';
import * as api from "@/apis/DoDApi";
import { DoDList } from "@/apis/DoDApi";
import { mountWithFlushPromise } from "@/../tests/unit/helper"
import DoDListPage from "@/views/DoDList.vue"

//@IMPROVE move to helper and remove duplicate
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
  beforeEach(() => {
    jest.clearAllMocks();
  })
  it("snapshot", async () => { })

  //@IMPROVE add snapshot test
  it("should show DoD List", async () => {
    //given
    mockDoDListApi()
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    //then
    expect(wrapper.text()).toMatch("Long Method Mock");
    expect(wrapper.text()).toMatch("Coverage Mock");
  });
  it("should create DoD", async () => {
    //given
    const mockCreateDoDApi = jest.spyOn(api, "createDoD").mockImplementation(jest.fn())
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    await wrapper.find("#input-name").setValue("Long Method")
    await wrapper.vm.onSubmit()
    //then
    expect(mockCreateDoDApi).toHaveBeenCalledWith({name: 'Long Method'})
    expect(wrapper.text()).toMatch("Long Method");
  });
  it("validate when no input name", async () => {
    //given
    const mockCreateDoDApi = jest.spyOn(api, "createDoD").mockImplementation(jest.fn())
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    await wrapper.vm.onSubmit()
    //then
    expect(wrapper.text()).toMatch("required");
    expect(mockCreateDoDApi).toHaveBeenCalledTimes(0)
  });
});
