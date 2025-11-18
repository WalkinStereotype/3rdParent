import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const routeTo = useNavigate();

  async function onSignOutButtonPress() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
    } else {
      routeTo("/", { replace: true });
    }
  }

  return <button onClick={onSignOutButtonPress}>Sign out</button>;
}
