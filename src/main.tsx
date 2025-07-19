import { createRoot } from "react-dom/client";

import { Providers } from "@app/Providers";

import "@shared/styles/index.css";

createRoot(document.getElementById("root")!).render(<Providers />);
