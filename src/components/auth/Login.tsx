import "./auth.css";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

import { useNavigate } from "react-router-dom";

import Logo from "../layout/Logo";

interface LoginProps {
  switchType: () => void;
}

export default function Login({ switchType }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const routeTo = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      setErrorMessage("Login failed: " + error.message);
    } else {
      // Supabase triggers the onAuthStateChange event automatically
      routeTo("/");
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="brand">
        <Logo />
        <h1>3rd Parent</h1>
      </div>
      <p>The place to learn the basics of life</p>
      <br />
      <div className="auth-form">
        <form className="inner-auth-form" onSubmit={(e) => handleLogin(e)}>
          <h3>Email:</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h3>Password:</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="auth-button" disabled={loading}>
            Login
          </button>
        </form>
        <br />
        <p>
          Don't have an account?{" "}
          <span onClick={switchType} className="switch-auth-text">
            Sign up.
          </span>
        </p>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}
