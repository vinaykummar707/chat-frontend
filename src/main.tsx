import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { NavbarSection } from "./mantine";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <NavbarSection />
    </MantineProvider>
  </StrictMode>
);
