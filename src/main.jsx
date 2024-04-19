import ReactDOM from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import App from "./App";
import Company from "./pages/Company";
import Contact from "./components/ui/Contact";
import Faqs from "./components/ui/Faqs";
import Bases from "./components/ui/Bases";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/bases",
        element: <Bases />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "*",
        element: <Navigate to="/company" replace />
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
