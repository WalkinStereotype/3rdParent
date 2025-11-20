import { Todo } from "@/utils/schema";
import {
  getTodos as dbGetTodos,
  addTodo as dbAddTodo,
  deleteTodo as dbDeleteTodo,
  updateTodo as dbUpdateTodo,
} from "@/supabase-api/todos";

export const getTodos = async (id: string): Promise<Todo[]> => {
  return await dbGetTodos(id);
};

export const addTodo = async (
  user_id: string,
  skill_id: number
): Promise<Todo | null> => {
  return await dbAddTodo(user_id, skill_id);
};

export const deleteTodo = async (user_id: string, skill_id: number) => {
  return await dbDeleteTodo(user_id, skill_id);
};

export const updateTodo = async (
  user_id: string,
  skill_id: number,
  is_priority: boolean
) => {
  return await dbUpdateTodo(user_id, skill_id, is_priority);
};
