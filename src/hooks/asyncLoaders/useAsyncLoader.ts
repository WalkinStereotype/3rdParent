import { useState, useCallback } from "react";

export function useAsyncLoader<T extends (...args: any[]) => Promise<any>>(
  asyncFn: T
) {
  const [loading, setLoading] = useState(false);

  const run = useCallback(
    async (
      ...args: Parameters<T>
    ): Promise<Awaited<ReturnType<T>> | undefined> => {
      setLoading(true);
      try {
        return await asyncFn(...args);
      } catch (err) {
        const fnName = asyncFn.name || "anonymous async function";
        console.error(`Error in async function "${fnName}":`, err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [asyncFn]
  );

  return [run, loading] as const;
}
