import axios from "axios";

const baseUrl = "https://fakestoreapi.com/";

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export default axiosInstance;