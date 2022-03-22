import { DoDRecord, DoDRecordList, DoDList, DoD } from "@/apis/DoDApi";
import * as api from "@/apis/DoDApi";

export function mockDoDListApi(items?:any) {
  let _items = [
    {
      id: 1,
      name: "Long Method Mock",
      data: [
        { id: 1, date: "2022-01-01", value: 10, comment: "something" },
        { id: 2, date: "2022-01-02", value: 20, comment: "something" },
        { id: 3, date: "2022-01-03", value: 30, comment: "something" },
      ],
    },
    {
      id: 2,
      name: "Coverage Mock",
      data: [
        { id: 1, date: "2022-01-01", value: 40, comment: "something" },
        { id: 2, date: "2022-01-02", value: 50, comment: "something" },
        { id: 3, date: "2022-01-03", value: 60, comment: "something" },
      ],
    },
  ]
  if(items) {
    _items = items
  }
  const response = {
    items: _items,
  } as DoDList;
  jest.spyOn(api, "findDoDList").mockResolvedValueOnce(response);
  return response;
}

export function mockDoDRecordListApi() {
  const response = {
    items: [
      {
        id: 1,
        date: "2022-01-01",
        value: 10,
        comment: 'Add new feature'
      },
      {
        id: 2,
        date: "2022-01-02",
        value: 20,
        comment: 'Add new feature 2'
      },

    ],
  } as DoDRecordList;
  const mock = jest.spyOn(api, "findDoDRecordList").mockResolvedValueOnce(response);
  return {mock, response};
}

export function mockCreateDoDApi() {
    const response = new Promise<DoD>((resolve, _) => { resolve({id: 1, name: "Long Method", data:[]}); });
    return jest.spyOn(api, "createDoD").mockResolvedValueOnce(response);
}

export function mockCreateDoDRecordApi() {
    const response = new Promise<DoDRecord>((resolve, _) => { resolve({id: 1, dodId: 100, date: "2022-01-01", value: 30, comment: 'Add new feature'}); });
    return jest.spyOn(api, "createDoDRecord").mockResolvedValueOnce(response);
}