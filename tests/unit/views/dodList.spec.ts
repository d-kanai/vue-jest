import "jest-canvas-mock";
import { mountWithFlushPromise } from "@/../tests/unit/helper";
import DoDList from "@/views/DoDList.vue";
import DoDForm from "@/components/DoD/DoDForm.vue";
import { mockDoDListApi, mockCreateDoDApi } from "@/../tests/unit/mockApi"
import { flushPromises } from "@vue/test-utils";

describe("DoDList.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("snapshot", async () => {
    //given
    mockDoDListApi();
    //when
    const wrapper = await mountWithFlushPromise(DoDList);
    //then
    expect(wrapper.element).toMatchSnapshot();
  });
  it("should show DoD List", async () => {
    //given
    mockDoDListApi();
    //when
    const wrapper = await mountWithFlushPromise(DoDList);
    //then
    expect(wrapper.text()).toMatch("Long Method Mock");
    expect(wrapper.text()).toMatch("Coverage Mock");
  });
  it("should create DoD", async () => {
    //given
    mockDoDListApi();
    const _mockCreateDoDApi = mockCreateDoDApi()
    //when
    const wrapper = await mountWithFlushPromise(DoDList);
    await wrapper.find("#input-name").setValue("@IMPROVE");
    await wrapper.findComponent(DoDForm).vm.onSubmit()
    // TODO: too much know details. change to below
    // const button = await wrapper.find('#dodFormSubmitButton');
    // await button.trigger("click");

    //then
    expect(_mockCreateDoDApi).toHaveBeenCalledWith({ name: "@IMPROVE" });
    // TODO: it should show new item after submit
    // expect(wrapper.text()).toMatch("@IMPROVE");
  });
  it("validate when no input name", async () => {
    //given
    mockDoDListApi();
    const _mockCreateDoDApi = mockCreateDoDApi()
    //when
    const wrapper = await mountWithFlushPromise(DoDList);
    await wrapper.findComponent(DoDForm).vm.onSubmit()
    //then
    expect(wrapper.text()).toMatch("required");
    expect(_mockCreateDoDApi).toHaveBeenCalledTimes(0);
  });
});
