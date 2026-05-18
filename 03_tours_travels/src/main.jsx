import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import myrouter from "./Router";
import AuthContextWrapper from "./context/AuthContextWrapper";

createRoot(document.getElementById("root")).render(
  <AuthContextWrapper>
    <RouterProvider router={myrouter} />
  </AuthContextWrapper>
);
