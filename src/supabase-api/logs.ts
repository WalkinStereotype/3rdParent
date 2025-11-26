import { supabase } from "@/lib/supabase";
import { Log } from "@/utils/schema";

export const getLogs = async (user_id: string): Promise<Log[]> => {
  const { data, error } = await supabase
    .from("logs")
    .select("id, skill_id, description, created_at, updated_at")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Error fetching logs:", error?.message);
    return [];
  }

  return data as Log[];
};

export const addLog = async ({
  user_id,
  skill_id,
  description,
}: {
  user_id: string;
  skill_id: number;
  description: string;
}) => {
  const { data, error } = await supabase
    .from("logs")
    .insert([
      {
        user_id,
        skill_id,
        description,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error adding log", error.message);
    return null;
  }

  return data as Log;
};

export const deleteLog = async ({
  user_id,
  log_id,
}: {
  user_id: string;
  log_id: number;
}) => {
  const { data, error } = await supabase
    .from("logs")
    .delete()
    .match({
      user_id,
      log_id,
    })
    .select();

  if (error) {
    console.error("Error deleting log:", error.message);
    return null;
  }

  console.log(data);
  return data;
};

export const updateLog = async ({
  user_id,
  log_id,
  description,
}: {
  user_id: string;
  log_id: number;
  description: string;
}) => {
  const { data, error } = await supabase
    .from("logs")
    .update({ description })
    .eq("user_id", user_id)
    .eq("id", log_id)
    .select();

  if (error) {
    console.error("Error updating log:", error.message);
    return null;
  }

  return data;
};
