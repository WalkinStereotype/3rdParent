import { getCategories as dbGetCategories } from "@/supabase-api/categories";

export const getCategories = async (): Promise<string[]> => {
  return await dbGetCategories();
};
