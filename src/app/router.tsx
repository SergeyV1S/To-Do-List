import { createBrowserRouter } from "react-router";

import { createTaskRoute, taskDetailsRoute, tasksRoute } from "@pages/index";

import { AppLayout } from "./layouts/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [tasksRoute, taskDetailsRoute, createTaskRoute]
  }
]);
