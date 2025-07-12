import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { TaskProvider } from "@modules/task";

import { TooltipProvider } from "@shared/ui";

import { router } from "./router";

export const Providers = () => (
  <TaskProvider>
    <TooltipProvider>
      <RouterProvider router={router} />
      <Toaster position='top-center' richColors closeButton />
    </TooltipProvider>
  </TaskProvider>
);
