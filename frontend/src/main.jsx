import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";
import { PublicDataProvider } from "./context/DataProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? import.meta.env.VITE_BASE_URL :  import.meta.env.VITE_LOCAL_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(

    <PublicDataProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PublicDataProvider>

);
