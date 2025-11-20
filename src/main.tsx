import "@/styles/tokens/index.css";
import "@/styles/base/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider, SkillsProvider } from "@/contexts";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <SkillsProvider>
        <App />
      </SkillsProvider>
    </AuthProvider>
  </React.StrictMode>
);
