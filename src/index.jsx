import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import Layout from "./components/layout/layout";
import NotFoundPage from "./components/notFoundPage/notFoundPage";
import Report from "./components/report/report";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "report",
        element: <Report />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
