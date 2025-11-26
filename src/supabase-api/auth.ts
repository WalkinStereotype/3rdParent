import { supabase } from "@/lib/supabase";

export const updateEmail = async (email: string) => {
  const { error } = await supabase.auth.updateUser({ email});

  if (error) {
    console.error("Error updating email:", error.message);
    return false;
  }

  return true;
}