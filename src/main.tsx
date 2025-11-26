import "@/styles/tokens/index.css";
import "@/styles/base/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  AuthProvider,
  ProfileProvider,
  SkillsProvider,
  TodosProvider,
  LogsProvider,
} from "@/contexts";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <SkillsProvider>
          <TodosProvider>
            <LogsProvider>
              <App />
            </LogsProvider>
          </TodosProvider>
        </SkillsProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
