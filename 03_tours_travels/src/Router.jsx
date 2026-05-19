import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Register";
import LearnUseEffect from "./components/LearnUseEffect";
import Wrapping from "./components/Wrapping";
import DestinationDescription from "./pages/DestinationDescription";
import Collections from "./pages/collections/Collections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/learn-use-effect",
        element: <LearnUseEffect />,
      },
      {
        path: "/wrapping",
        element: <Wrapping />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/destination/:slug",
        element: <DestinationDescription />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
