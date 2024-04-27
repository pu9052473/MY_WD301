import "./index.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/theme.tsx";

// we are going to wrap the existing App component with our new `ThemeProvider'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
