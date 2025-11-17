import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Sign up function
  async function handleSignup() {
    setLoading(true);

    if(password !== confirmPassword){
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
    <div>
      <form onSubmit={handleSignup}>
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
          type="email"
          placeholder="Username"
          value={email}
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
          placeholder="Password"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
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