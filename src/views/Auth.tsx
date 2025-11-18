import { useState } from "react";

import Login from "@/components/layout/auth/Login";
import Signup from "@/components/layout/auth/Signup";

export default function Auth() {
  const [type, setType] = useState<"login" | "signup">("login");

  return type === "login" ? (
    <Login switchType={() => setType("signup")} />
  ) : (
    <Signup switchType={() => setType("login")} />
  );
}
