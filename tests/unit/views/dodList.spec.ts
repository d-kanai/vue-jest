import "jest-canvas-mock";
import { mountWithFlushPromise } from "@/../tests/unit/helper";
import DoDListPage from "@/views/DoDList.vue";
import { mockDoDListApi, mockCreateDoDApi } from "@/../tests/unit/mockApi"

describe("DoDList.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("snapshot", async () => {});

  //@IMPROVE add snapshot test
  it("should show DoD List", async () => {
    //given
    mockDoDListApi();
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    //then
    expect(wrapper.text()).toMatch("Long Method Mock");
    expect(wrapper.text()).toMatch("Coverage Mock");
  });
  it("should create DoD", async () => {
    //given
    mockDoDListApi();
    const _mockCreateDoDApi = mockCreateDoDApi()
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    await wrapper.find("#input-name").setValue("Long Method");
    await wrapper.vm.onDoDSubmit();
    //then
    expect(_mockCreateDoDApi).toHaveBeenCalledWith({ name: "Long Method" });
    expect(wrapper.text()).toMatch("Long Method");
  });
  it("validate when no input name", async () => {
    //given
    const _mockCreateDoDApi = mockCreateDoDApi()
    //when
    const wrapper = await mountWithFlushPromise(DoDListPage);
    await wrapper.vm.onDoDSubmit();
    //then
    expect(wrapper.text()).toMatch("required");
    expect(_mockCreateDoDApi).toHaveBeenCalledTimes(0);
  });
});
