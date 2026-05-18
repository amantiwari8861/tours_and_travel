import { createContext, useState } from "react";
import useAuthService from "../services/AuthService";

const AuthContext = createContext(null);

const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPrinciple, setUserPrinciple] = useState(null);
  const { login: apiLogin } = useAuthService();

  const login = async (email, password) => {
    const user = await apiLogin({ email, password });
    setUserPrinciple({
      //   name: "Aman Tiwari",
      //   email,
      //   role: "user",
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_rJQS-xaUvygvCxc4O5PzNkG_oOqQsdSew&s",
      ...user,
    });
    setIsLoggedIn(true);
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserPrinciple(null);
  };

  return (
    <>
      <AuthContext.Provider
        value={{ login, logout, isLoggedIn, userPrinciple }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextWrapper;
export { AuthContext };
