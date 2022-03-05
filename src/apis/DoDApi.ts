import axios from "axios"

export async function createDoD(params: Object): Promise<String> {
  await axios.post("/dods", params)
  console.log('api call: createDoD', params)
  return "success"
}

export async function findDoDList(): Promise<DoDList> {
  console.log('api call: findDoDList')
  axios.defaults.baseURL = 'http://localhost:9000';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const dodList = await axios.get("/dods")
  console.log(dodList.data);
  return {
    items: 
      dodList.data
  }
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
  id: number
  date: string
  value: number
  comment: string
}

export interface DoD {
  name: string
  data: DoDDataRecord[]
}

export interface DoDList {
  items: DoD[]
}