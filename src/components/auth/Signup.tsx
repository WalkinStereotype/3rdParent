import "./auth.css";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

import Logo from "../layout/Logo";

interface SignupProps {
  switchType: () => void;
}

export default function Signup({ switchType }: SignupProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Sign up function
  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      console.log("Full signup error: Passwords don't match");
      setErrorMessage("Error Signing Up: Passwords don't match");
      setLoading(false);
      return;
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: email.trim().toLowerCase(),
        password: password,
        options: {
          data: {
            username: username,
          },
        },
      }
    );

    if (signUpError) {
      console.log("Full signup error:", signUpError);
      console.log("Raw response:", signUpError?.cause);
      setErrorMessage("Error Signing Up: " + signUpError.message);
      setLoading(false);
      return;
    }

    const user = signUpData.user;

    if (user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          username: username,
        })
        .eq("id", user.id);

      if (profileError) {
        console.log("Profile db insert error", profileError);
        setErrorMessage(
          "Signup success, but error saving profile to database: " +
            profileError.message
        );
        await supabase.auth.signOut();
        setLoading(false);
        return;
      }
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
        <form className="inner-auth-form" onSubmit={(e) => handleSignup(e)}>
          <h3>Email:</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h3>Username:</h3>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <h3>Confirm Password:</h3>
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="auth-button" disabled={loading}>
            Sign Up
          </button>
        </form>
        <br />
        <p>
          Have an account?{" "}
          <span onClick={switchType} className="switch-auth-text">
            Log in.
          </span>
        </p>
        
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}
