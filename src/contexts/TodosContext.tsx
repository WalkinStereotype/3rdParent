import React, { createContext, useEffect, useState } from "react";
import { useSharedAsyncLoader } from "@/hooks/asyncLoaders/useSharedAsyncLoader";

import { Todo } from "@/utils/schema";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "@/services/TodosService";

import { useAuth } from "@/hooks/contexts/useAuth";

type TodosContextType = {
  todos: Todo[];
  max_priority: number;
  loading: boolean;
  reload_todos: (() => Promise<void>) | null;
  toggle_todo: ((skill_id: number) => Promise<boolean>) | null;
  update_todo:
    | ((skill_id: number, is_priority: boolean) => Promise<boolean>)
    | null;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  max_priority: 3,
  loading: true,
  reload_todos: null,
  toggle_todo: null,
  update_todo: null,
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loadingCount, setLoadingCount] = useState(0);
  const loading = loadingCount > 0;
  const setLoading = (v: boolean) => setLoadingCount((c) => (v ? 1 : -1));

  const max_priority = 3;

  const { user } = useAuth();
  const userId = user?.id;

  const load_todos = useSharedAsyncLoader(async () => {
    if (!userId) return;
    const result = await getTodos(userId);
    setTodos(result);
  }, setLoading);

  const findTodo = (skill_id: number) => {
    return todos.find((t) => t.skill_id === skill_id);
  };

  const toggle_todo = async (skill_id: number) => {
    if (!userId) return false;

    const supposedTodo = findTodo(skill_id);
    const time = new Date();

    const old = todos;

    setTodos((prev) =>
      supposedTodo
        ? prev.filter((t) => t.skill_id !== skill_id)
        : ([
            ...prev,
            { skill_id: skill_id, is_priority: false, updated_at: time },
          ] as Todo[])
    );

    const data = await (supposedTodo
      ? deleteTodo(userId, skill_id)
      : addTodo(userId, skill_id, time));

    if (!data) {
      console.error("Failed to toggle todo: no data returned, roll back state");

      setTodos(old);
      return false;
    }
    return true;
  };

  const update_todo = async (skillId: number, is_priority: boolean) => {
    if (!userId) return false;

    const old = todos;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.skill_id === skillId ? { ...todo, is_priority } : todo
      )
    );

    const data = await updateTodo(userId, skillId, is_priority);

    if (!data) {
      console.error("update_todo failed — rolling back");
      setTodos(old);
      return false;
    }

    return true;
  };

  useEffect(() => {
    load_todos();
  }, [userId]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        max_priority,
        loading,
        reload_todos: load_todos,
        toggle_todo,
        update_todo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
