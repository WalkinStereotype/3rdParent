import "@/styles/layout/page.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/layout/NavBar/NavBar";
import Home from "./views/Home";
import Skills from "./views/Skills";
import ToDo from "./views/Todo";
import Logs from "./views/Logs";
import Profile from "./views/Profile";
import Auth from "./views/Auth";

import { useAuth } from "@/hooks/contexts/useAuth";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import SkillDetails from "./views/SkillDetails";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>

        {/* Unauthenticated login route */}
        {!user && (
          <Route path="/" element={<Auth />} />
        )}

        {/* Authenticated routes with navbar */}
        {user && (
          <Route
            element={
              <div className="container">
                <NavBar />
                <div className="content">
                  <ProtectedRoutes />
                </div>
              </div>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/:id" element={<SkillDetails />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        )}

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}
