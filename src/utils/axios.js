import axios from "axios";

// const BASE_URL = "http://localhost:3000/api/";
const BASE_URL = "http://realdev1.psti.undiknas.ac.id:3000/api/";

const instance = axios.create({ baseURL: BASE_URL });

export const axiosRequest = (method, url, config, data) => {
  return method === "GET"
    ? instance.get(url, config)
    : method === "POST"
    ? instance.post(url, config, data)
    : instance.delete(url, config);
};
