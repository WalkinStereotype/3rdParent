import "./index.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./views/Home";
import Skills from "./views/Skills";
import ToDo from "./views/Todo";
import Logs from "./views/Logs";

import { useAuth } from "@/hooks/contexts/useAuth";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./lib/supabase";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (user) {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/logs" element={<Logs />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}
