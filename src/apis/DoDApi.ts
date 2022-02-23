
export async function findDoDItems(): Promise<DoDItems> {
  console.log('api call: findDoDItems')
  return {
    items: [
      {
        name: "Long Method",
        data: [
          { id: 1, date: "2020-01-01", value: 10, comment: 'something'},
          { id: 2, date: "2020-01-02", value: 20, comment: 'something'},
          { id: 3, date: "2020-01-03", value: 30, comment: 'something'},
        ]
      },
      {
        name: "Coverage",
        data: [
          { id: 1, date: "2020-01-01", value: 81, comment: 'something'},
          { id: 2, date: "2020-01-02", value: 80, comment: 'something'},
          { id: 3, date: "2020-01-03", value: 90, comment: 'something'},
        ]
      }
    ]
  } as DoDItems
}


export interface DoDDataRecord {
  id: number
  date: string
  value: number
  comment: string
}

export interface DoDItem {
  name: string
  data: DoDDataRecord[]
}

export interface DoDItems {
  items: DoDItem[]
}