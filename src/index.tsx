import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hosting from "./components/Hosting/Hosting";
import Functions from "./components/Functions/Functions";
import MachineLearning from "./components/MachineLearning/MachineLearning";
import Analytics from "./components/Analytics/Analytics";
import Performance from "./components/Performance/Performance";
import TestLab from "./components/TestLab/TestLab";
import Authentication from "./components/Authentication/Authentication";
import UserForm from "./components/Authentication/UserForm";
import Storage from "./components/Storage/Storage";
import Projects from "./components/Projects/Projects";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import AddProject from "./components/Projects/Pages/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/add",
        element: <AddProject />,
      },
      {
        path: "/hosting",
        element: <Hosting />,
      },
      {
        path: "/storage",
        element: <Storage />,
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
      {
        path: "/auth/register",
        element: <UserForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
