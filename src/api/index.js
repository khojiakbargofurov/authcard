import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  timeout: 50000
})

export default api;