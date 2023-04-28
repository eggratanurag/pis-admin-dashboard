import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";
import { PublicDataProvider } from "./context/DataProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "https://creepy-bee-garment.cyclic.app" :  "http://localhost:5000";

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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </PublicDataProvider>

);
