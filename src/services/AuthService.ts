import { updateEmail as dbUpdateEmail } from "@/supabase-api/auth";

export const updateEmail = async (email: string) => {
  return await dbUpdateEmail(email);
};
