import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

// assets
import "./assets/scss/reset.scss";
import "./assets/scss/common.scss";

// pages
import Home from "./pages/Home/Home";

// react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Home />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
