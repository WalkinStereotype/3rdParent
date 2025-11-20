import React, { createContext, useEffect, useState } from "react";
import { useSharedAsyncLoader } from "@/hooks/asyncLoaders/useSharedAsyncLoader";

import { Todo } from "@/utils/schema";
import { getTodos, addTodo, deleteTodo } from "@/services/TodosService";

import { useAuth } from "@/hooks/contexts/useAuth";

type TodosContextType = {
  todos: Todo[];
  loading: boolean;
  reload_todos: (() => Promise<void>) | null;
  add_todo: ((skill_id: number) => Promise<boolean>) | null;
  delete_todo: ((skill_id: number) => Promise<boolean>) | null;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  loading: true,
  reload_todos: null,
  add_todo: null,
  delete_todo: null,
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loadingCount, setLoadingCount] = useState(0);
  const loading = loadingCount > 0;
  const setLoading = (v: boolean) => setLoadingCount((c) => (v ? 1 : -1));

  const { user } = useAuth();
  const userId = user?.id;

  const load_todos = useSharedAsyncLoader(async () => {
    if (!userId) return;
    const result = await getTodos(userId);
    setTodos(result);
  }, setLoading);

  const add_todo = async (skill_id: number) => {
    if (!userId) return false;
    setLoading(true);
    const data = await addTodo(userId, skill_id);
    if (!data) {
      setLoading(false);
      return false;
    }
    setTodos((prev) => [
      ...prev,
      data,
    ]);
    setLoading(false);
    return true;
  };

  const delete_todo = async (skillId: number) => {
    if (!userId) return false;
    setLoading(true);
    const data = await deleteTodo(userId, skillId);
    if (!data) {
      setLoading(false);
      return false;
    }
    setTodos((prev) => prev.filter((s) => s.skill_id !== skillId));
    setLoading(false);
    return true;
  };

  useEffect(() => {
    load_todos();
  }, [userId]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        loading,
        reload_todos: load_todos,
        add_todo,
        delete_todo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
