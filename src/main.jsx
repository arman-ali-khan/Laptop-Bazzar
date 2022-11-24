import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./Context/ContextProvider";
import "./index.css";
import  { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ContextProvider>
       <App />
      <Toaster />
    </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
