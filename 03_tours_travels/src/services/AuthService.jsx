import axiosInstance from "../interceptors/axiosNoAuthInterceptor";

const useAuthService = () => {
  const register = async (formData) => {
    try {
      const response = await axiosInstance.post("/api/v1/user", formData);
      console.log("Registration response :", response.data);
      return true;
    } catch (error) {
      console.log("Registration error :", error);
      throw error;
    }
  };

  const login = async (data) => {
    try {
      const response = await axiosInstance.post("/api/v1/auth/login", data);
      console.log("Login response :", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data.user;
    } catch (error) {
      console.log("Login error :", error);
      throw error;
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };
  return {
    register,
    login,
    logout,
    getCurrentUser,
    getToken,
  };
};

export default useAuthService;
