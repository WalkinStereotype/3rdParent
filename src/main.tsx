import "@/styles/tokens/index.css";
import "@/styles/base/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider, SkillsProvider, TodosProvider } from "@/contexts";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <SkillsProvider>
        <TodosProvider>
          <App />
        </TodosProvider>
      </SkillsProvider>
    </AuthProvider>
  </React.StrictMode>
);
