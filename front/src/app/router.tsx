import { createBrowserRouter } from "react-router";

import { createTaskRoute, taskDetailsRoute, tasksRoute } from "@modules/task";

import { AppLayout } from "./layouts/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [tasksRoute, taskDetailsRoute, createTaskRoute]
  }
]);
