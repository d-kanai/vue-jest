import "jest-canvas-mock";
import * as api from "@/apis/DoDApi";
import { mountWithFlushPromise } from "@/../tests/unit/helper";
import DoDDetail from "@/views/DoDDetail.vue";
import { mockDoDListApi } from "@/../tests/unit/mockApi"

describe("DoDList.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("CreateDoDRecord", () => {
    it("should create dod record", async function () {
      //given
      const dodList = mockDoDListApi();
      const mockCreateDoDRecordApi = jest.spyOn(api, "createDoDRecord").mockImplementation(jest.fn());
     //when
      const wrapper = await mountWithFlushPromise(DoDDetail, `/dods/${dodList.items[0].id}`);
      await wrapper.find("#input-date").setValue("2022-01-01");
      await wrapper.find("#input-value").setValue("30");
      await wrapper.find("#input-comment").setValue("Add new feature");
      // then
      await wrapper.vm.onDoDRecordSubmit();
      expect(mockCreateDoDRecordApi).toHaveBeenCalledTimes(1);
      expect(mockCreateDoDRecordApi).toHaveBeenCalledWith({
        comment: "Add new feature",
        date: "2022-01-01",
        value: "30",
        dodId: dodList.items[0].id,
      });
      expect(wrapper.text()).toMatch("2022-01-01");
      expect(wrapper.text()).toMatch("30");
      expect(wrapper.text()).toMatch("Add new feature");
    });
  });
});


// MEMO: how to select
// const option = await wrapper.find("#select-dod").find("option");
// option.element.selected = true;
// wrapper.find("#select-dod").trigger("change");