import { http } from "@/apis/axios";

export async function createDoD(params: any): Promise<DoD> {
  // @IMPROVE: auto log by axios intercepter
  console.log("api call: createDoD", params);
  const response = await http.post("/dods", params);
  return response.data;
}

export async function createDoDRecord(params: any): Promise<string> {
  // @IMPROVE: auto log by axios intercepter
  console.log("api call: createDoDRecord", params);
  await http.post("/dodRecords", params);
  return "success";
}

export async function findDoDList(): Promise<DoDList> {
  console.log("api call: findDoDList");
  const dodList = await http.get("/dods");
  return dodList.data as DoDList;
  // return {
  //   items: [
  //     {
  //       name: "Long Method",
  //       data: [
  //         { id: 1, date: "2020-01-01", value: 10, comment: 'something'},
  //         { id: 2, date: "2020-01-02", value: 20, comment: 'something'},
  //         { id: 3, date: "2020-01-03", value: 30, comment: 'something'},
  //       ]
  //     },
  //     {
  //       name: "Coverage",
  //       data: [
  //         { id: 1, date: "2020-01-01", value: 81, comment: 'something'},
  //         { id: 2, date: "2020-01-02", value: 80, comment: 'something'},
  //         { id: 3, date: "2020-01-03", value: 90, comment: 'something'},
  //       ]
  //     }
  //   ]
  // } as DoDList
}

export interface DoDDataRecord {
  id: number;
  date: string;
  value: number;
  comment: string;
}

export interface DoD {
  id: number;
  name: string;
  data: DoDDataRecord[];
}

export interface DoDList {
  items: DoD[];
}
