import { DoDRecord, DoDList, DoD } from "@/apis/DoDApi";
import * as api from "@/apis/DoDApi";

export function mockDoDListApi() {
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

export function mockCreateDoDApi() {
    const response = new Promise<DoD>((resolve, _) => { resolve({id: 1, name: "Long Method", data:[]}); });
    return jest.spyOn(api, "createDoD").mockResolvedValueOnce(response);
}

export function mockCreateDoDRecordApi() {
    const response = new Promise<DoDRecord>((resolve, _) => { resolve({id: 1, date: "2020-01-01", value: 20, comment: 'New Feature'}); });
    return jest.spyOn(api, "createDoDRecord").mockResolvedValueOnce(response);
}