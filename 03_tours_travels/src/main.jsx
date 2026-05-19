import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import myrouter from "./Router";
import AuthContextWrapper from "./context/AuthContextWrapper";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextWrapper>
      <RouterProvider router={myrouter} />
    </AuthContextWrapper>
  </Provider>,
);
