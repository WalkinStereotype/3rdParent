import React, { createContext, useEffect, useState } from "react";
import { useSharedAsyncLoader } from "@/hooks/asyncLoaders/useSharedAsyncLoader";

import { Log } from "@/utils/schema";
import {
  getLogs,
  addLog,
  deleteLog,
  updateLog,
} from "@/services/LogsService";

import { useAuth } from "@/hooks/contexts/useAuth";

type LogsContextType = {
  logs: Log[];
  loading: boolean;
  reload_logs: (() => Promise<void>) | null;
  add_log: (({skill_id, description}: {skill_id: number, description: string}) => Promise<boolean>) | null;
  delete_log: ((log_id: number) => Promise<boolean>) | null;
  update_log:
    | (({ log_id, description }: { log_id: number, description: string}) => Promise<boolean>)
    | null;
};

export const LogsContext = createContext<LogsContextType>({
  logs: [],
  loading: true,
  reload_logs: null,
  add_log: null,
  delete_log: null,
  update_log: null,
});

export const LogsProvider = ({ children }: { children: React.ReactNode }) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loadingCount, setLoadingCount] = useState(0);
  const loading = loadingCount > 0;
  const setLoading = (v: boolean) => setLoadingCount((c) => (v ? 1 : -1));

  const max_priority = 3;

  const { user } = useAuth();
  const userId = user?.id;

  const load_logs = useSharedAsyncLoader(async () => {
    if (!userId) return;
    const result = await getLogs(userId);
    setLogs(result);
  }, setLoading);

  const findSkillOfLog = (skill_id: number) => {
    return logs.find((l) => l.skill_id === skill_id);
  };

  const add_log = async ({ skill_id, description }: { skill_id: number, description: string}) => {
    if (!userId) return false;
    setLoading(true);
    const data = await addLog({ user_id: userId, skill_id, description});
    if (!data) {
      setLoading(false);
      return false;
    }

    setLogs((prev) => [...prev, data]);
    return true;
  };

  const delete_log = async (log_id: number) => {
    if (!userId) return false;
    setLoading(true);
    const data = await deleteLog({ user_id: userId, log_id });
    if (!data) {
      setLoading(false);
      return false;
    }
    setLogs((prev) => prev.filter((l) => l.id !== log_id));
    return true;
  };


  const update_log = async ({ log_id, description }: { log_id: number, description: string}) => {
    if (!userId) return false;

    const old = logs;
    setLogs((prev) =>
      prev.map((log) =>
        log.id === log_id ? ({ ...log, description } as Log) : log
      )
    );

    const data = await updateLog({
      user_id: userId,
      log_id,
      description,
    });

    if (!data) {
      console.error("update_log failed — rolling back");
      setLogs(old);
      return false;
    }

    return true;
  };

  useEffect(() => {
    load_logs();
  }, [userId]);

  return (
    <LogsContext.Provider
      value={{
        logs,
        loading,
        reload_logs: load_logs,
        add_log,
        delete_log,
        update_log,
      }}
    >
      {children}
    </LogsContext.Provider>
  );
};
