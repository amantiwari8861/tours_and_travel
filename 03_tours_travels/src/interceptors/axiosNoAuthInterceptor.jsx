import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEAPI_URL,
    withCredentials: true, // for cookies/session
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;