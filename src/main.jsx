import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ShowMovies from "./pages/ShowMovies";
import AuthRequire from "./helper/AuthRequire";

import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movies",
        element: (
          <AuthRequire>
            <ShowMovies />
          </AuthRequire>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
