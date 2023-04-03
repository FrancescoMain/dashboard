import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Autentication from "./components/Authentication/Autentication";
import Database from "./components/Database/Database";
import Hosting from "./components/Hosting/Hosting";
import Functions from "./components/Functions/Functions";
import MachineLearning from "./components/MachineLearning/MachineLearning";
import Analytics from "./components/Analytics/Analytics";
import Performance from "./components/Performance/Performance";
import TestLab from "./components/TestLab/TestLab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <Autentication />,
      },
      {
        path: "/database",
        element: <Database />,
      },
      {
        path: "/hosting",
        element: <Hosting />,
      },
      {
        path: "/functions",
        element: <Functions />,
      },
      {
        path: "/machineLearning",
        element: <MachineLearning />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/performance",
        element: <Performance />,
      },
      {
        path: "/testLab",
        element: <TestLab />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
