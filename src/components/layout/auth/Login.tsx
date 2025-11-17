import { useState } from "react";
import { supabase } from "@/lib/supabase";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const routeTo = useNavigate();

  async function handleLogin() {
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
    <div>
      <form onSubmit={handleLogin}>
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

        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}
