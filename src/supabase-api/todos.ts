import { supabase } from "@/lib/supabase";
import { Todo } from "@/utils/schema";

export const getTodos = async (id: string) => {
  const { data, error } = await supabase
    .from("todos")
    .select("skill_id, is_priority, updated_at")
    .eq("user_id", id);

  if (error || !data) {
    console.error("Error fetching todos:", error?.message);
    return [];
  }

  return data as Todo[];
};

export const addTodo = async (user_id: string, skill_id: number) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([
      {
        user_id: user_id,
        skill_id: skill_id,
        is_priority: false,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error adding skill", error.message);
    return null;
  }

  return data as Todo;
};

export const deleteTodo = async (user_id: string, skill_id: number) => {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .match({
      user_id: user_id,
      skill_id: skill_id,
    })
    .select();

  if (error) {
    console.error("Error deleting todo:", error.message);
    return null;
  }

  console.log(data);
  return data;
};

export const updateTodo = async (
  user_id: string,
  skill_id: number,
  is_priority: boolean
) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ is_priority: is_priority})
    .eq("user_id", user_id)
    .eq("skill_id", skill_id)
    .eq("is_priority", (!is_priority));
  
  if (error) {
    console.error("Error updating todo:", error.message);
    return null;
  }

  return data;
};
