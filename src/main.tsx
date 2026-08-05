import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CollectionProvider } from "./context/CollectionContext";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <CollectionProvider>
      <App />
    </CollectionProvider>
  </React.StrictMode>
);s