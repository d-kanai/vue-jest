import { mountWithFlushPromise } from "@/../tests/unit/helper";
import DoDDetail from "@/views/DoDDetail.vue";
import DoDRecordForm from "@/components/DoD/DoDRecordForm.vue";
import { mockCreateDoDRecordApi, mockDoDRecordListApi } from "@/../tests/unit/mockApi"
import { flushPromises } from "@vue/test-utils";

describe("DoDDetailPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("CreateDoDRecord", () => {
    it("should show dod records", async function () {
      //given
      const dodId = 1234
      const { mock } = mockDoDRecordListApi()
      //when
      const wrapper = await mountWithFlushPromise(DoDDetail, `/dods/${dodId}`);
      await flushPromises()
      //then
      expect(mock).toHaveBeenCalledTimes(1);
      expect(wrapper.text()).toMatch("2022-01-01");
      expect(wrapper.text()).toMatch("20");
      expect(wrapper.text()).toMatch("Add new feature");
    })
    it("should create dod record", async function () {
      //given
      const dodId = 1234
      mockDoDRecordListApi()
      const _mockCreateDoDRecordApi = mockCreateDoDRecordApi()
      //when
      const wrapper = await mountWithFlushPromise(DoDDetail, `/dods/${dodId}`);
      await wrapper.find("#input-date").setValue("2022-01-01");
      await wrapper.find("#input-value").setValue("30");
      await wrapper.find("#input-comment").setValue("Add new feature");
      await wrapper.findComponent(DoDRecordForm).vm.onSubmit()
      //then
      expect(_mockCreateDoDRecordApi).toHaveBeenCalledTimes(1);
      expect(_mockCreateDoDRecordApi).toHaveBeenCalledWith({
        comment: "Add new feature",
        date: "2022-01-01",
        value: "30",
        dodId: dodId,
      });
      // TODO: it should show new item after submit
      // expect(wrapper.text()).toContain("2022-01-01");
      // expect(wrapper.text()).toMatch("30");
      // expect(wrapper.text()).toMatch("Add new feature");
    });
    it("validate required", async function () {
      //given
      const dodId = 1234
      mockDoDRecordListApi()
      const _mockCreateDoDRecordApi = mockCreateDoDRecordApi()
      //when
      const wrapper = await mountWithFlushPromise(DoDDetail, `/dods/${dodId}`);
      //then
      await wrapper.findComponent(DoDRecordForm).vm.onSubmit()
      expect(_mockCreateDoDRecordApi).toHaveBeenCalledTimes(0);
      expect(wrapper.text()).toMatch("required");
    });
  });
});


// MEMO: how to select
// const option = await wrapper.find("#select-dod").find("option");
// option.element.selected = true;
// wrapper.find("#select-dod").trigger("change");