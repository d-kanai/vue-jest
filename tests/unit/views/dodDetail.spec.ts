import "jest-canvas-mock";
import * as api from "@/apis/DoDApi";
import { DoDList, DoD } from "@/apis/DoDApi";
import { mountWithFlushPromise } from "@/../tests/unit/helper";
import DoDDetail from "@/views/DoDDetail.vue";
import { useRouter, useRoute } from 'vue-router'



//@IMPROVE move to helper and remove duplicate
function mockDoDListApi() {
  const response = {
    items: [
      {
        id: 1,
        name: "Long Method Mock",
        data: [
          { id: 1, date: "2020-01-01", value: 10, comment: "something" },
          { id: 2, date: "2020-01-02", value: 20, comment: "something" },
          { id: 3, date: "2020-01-03", value: 30, comment: "something" },
        ],
      },
      {
        id: 2,
        name: "Coverage Mock",
        data: [
          { id: 1, date: "2020-01-01", value: 81, comment: "something" },
          { id: 2, date: "2020-01-02", value: 80, comment: "something" },
          { id: 3, date: "2020-01-03", value: 90, comment: "something" },
        ],
      },
    ],
  } as DoDList;
  jest.spyOn(api, "findDoDList").mockResolvedValueOnce(response);
  return response;
}

describe("DoDList.vue", () => {
  beforeEach(() => {
    jest.clearAllMocks();

  });
  describe("CreateDoDRecord", () => {
    it("should create dod record", async function () {
      //given
      const dodList = mockDoDListApi();
      const mockCreateDoDRecordApi = jest.spyOn(api, "createDoDRecord").mockImplementation(jest.fn());
      //TODO: we need mock useRoute return params
      const mock = jest.fn()
      mock.mockImplementationOnce(() => ({ params: { id: 1 } }))
      jest.mock('vue-router', () => ({ useRoute: mock, useRouter: jest.fn(() => ({ push: () => {} })) }))
      //when
      const wrapper = await mountWithFlushPromise(DoDDetail);
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