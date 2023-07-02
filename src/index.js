import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// index.js

import { BrowserRouter as Router } from "react-router-dom";

// ... other code

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
