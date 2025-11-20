import { Todo } from "@/utils/schema";
import {
  getTodos as dbGetTodos,
  addTodo as dbAddTodo,
  deleteTodo as dbDeleteTodo,
} from "@/supabase-api/todos";

export const getTodos = async (id: string): Promise<Todo[]> => {
  return await dbGetTodos(id);
};

export const addSkill = async (
  user_id: string,
  skill_id: number
): Promise<Todo | null> => {
  return await dbAddTodo(user_id, skill_id);
};

export const deleteTodo = async (user_id: string, skill_id: number) => {
  return await dbDeleteTodo(user_id, skill_id);
};
