import Axios from "axios";

const axiosInter = Axios.create({
  baseURL: "http://localhost:1111",
});

axiosInter.interceptors.request.use((request) => {
  return request;
});

axiosInter.interceptors.response.use((response) => {
  return response;
});

export default axiosInter;
