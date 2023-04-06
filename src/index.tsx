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
import RegistrationForm from "./components/Authentication/Registration/RegistrationForm";
import LoginForm from "./components/Authentication/Login/LoginForm";
import Presenza from "./components/Presenza/Presenza";
import Projects from "./components/Projects/Pages/index/ProjectsList";
import { store, useAppSelector } from "./redux/store";
import { Provider } from "react-redux";
import AddProjectForm from "./components/Projects/Pages/create/AddProjectForm";
import EditProjectForm from "./components/Projects/Pages/edit/EditProjectForm";
import ShowProjectPage from "./components/Projects/Pages/show/ShowProjectPage";

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
        path: "/auth/register",
        element: <RegistrationForm />,
      },
      {
        path: "/auth/login",
        element: <LoginForm />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/add",
        element: <AddProjectForm />,
      },
      {
        path: `/projects/edit/:id`,
        element: <EditProjectForm/>
      },
      {
        path: `/projects/details/:id`,
        element: <ShowProjectPage project={project}/>
      },
      {
        path: "/hosting",
        element: <Hosting />,
      },
      {
        path: "/presenza",
        element: <Presenza />,
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
      }
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
