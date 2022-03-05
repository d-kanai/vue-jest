import axios from "axios"

export const http = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
    timeout: 10000,
  })

