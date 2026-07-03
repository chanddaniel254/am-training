import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Entry from "./Entry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Entry />
      <ToastContainer />
    </QueryClientProvider>
  </StrictMode>,
);
