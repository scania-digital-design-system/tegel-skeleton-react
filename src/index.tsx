import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { defineCustomElements } from "@scania/tegel-react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import App from "./App";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
        ],
      },
    ],
  },
]);

defineCustomElements();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
