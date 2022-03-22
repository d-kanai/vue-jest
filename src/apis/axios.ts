import axios from "axios";

//@IMPROVE: use env var
export const http = axios.create({
  //baseURL: "http://54.199.13.127:9000",
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 10000,
});
