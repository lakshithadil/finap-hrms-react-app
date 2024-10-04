import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7266/api",
  withCredentials: true, // Include cookies in requests
});

export default axiosInstance;
