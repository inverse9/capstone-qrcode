import axios from "axios";

const instance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const axiosRequest = (method, url, config, data) => {
  return method === "GET"
    ? instance.get(url, config)
    : method === "POST"
    ? instance.post(url, config, data)
    : instance.delete(url, config);
};
