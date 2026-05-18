import { useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthContextWrapper");
  }

  return context;
};

export default useAuth;
