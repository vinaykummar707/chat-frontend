import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { NavbarSection } from "./mantine";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: "violet",
        fontFamily: "Urbanist,serif",
        defaultRadius: "lg",
      }}
    >
      <NavbarSection />
    </MantineProvider>
  </StrictMode>
);
