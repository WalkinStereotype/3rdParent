import "@/styles/layout/page.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar/NavBar";
import Home from "./views/Home";
import Skills from "./views/Skills";
import ToDo from "./views/Todo";
import Logs from "./views/Logs";
import Profile from "./views/Profile";
import Auth from "./views/Auth";

import { useAuth } from "@/hooks/contexts/useAuth";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  console.log(user);

  return (
    <Router>
      {!user && <Auth />}

      {user && (
        // <div className="App">
        <div className="container">
          <NavBar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}
