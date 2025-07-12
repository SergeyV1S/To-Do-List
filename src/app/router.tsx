import { createBrowserRouter } from "react-router";

import { taskDetailsRoute, tasksRoute } from "@modules/task";

import { AppLayout } from "./layouts/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [tasksRoute, taskDetailsRoute]
  }
]);
