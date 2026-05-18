import axios from "axios";

const axiosAuthInterceptorInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEAPI_URL,
    withCredentials: true, // for cookies/session
    headers: {
        "Content-Type": "application/json"
    }
});


// ================= REQUEST INTERCEPTOR =================

axiosAuthInterceptorInstance.interceptors.request.use(
    (config) => {

        // get token from localStorage
        const token = localStorage.getItem("token");

        // attach token automatically
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log("Request Sent:", config);

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


// ================= RESPONSE INTERCEPTOR =================

axiosAuthInterceptorInstance.interceptors.response.use(
    (response) => {

        console.log("Response Received:", response);

        return response;
    },

    async (error) => {

        // Unauthorized
        if (error.response?.status === 401) {

            console.log("Unauthorized Access");

            // Example:
            // localStorage.removeItem("token");
            // window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default axiosAuthInterceptorInstance;