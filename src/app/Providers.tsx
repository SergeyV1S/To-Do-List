import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { TooltipProvider } from "@shared/ui";

import { router } from "./router";

export const Providers = () => (
  <TooltipProvider>
    <RouterProvider router={router} />
    <Toaster position='top-center' richColors closeButton />
  </TooltipProvider>
);
