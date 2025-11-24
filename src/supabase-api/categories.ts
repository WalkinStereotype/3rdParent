import { supabase } from "@/lib/supabase";

export const getCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("name")
    .order("id");

  if (error || !data) {
    console.error("Error fetching categories:", error?.message);
    return [];
  }

  return data.map(({ name }) => name as String);
};
