import React, { createContext, useEffect, useState } from "react";
import { useSharedAsyncLoader } from "@/hooks/asyncLoaders/useSharedAsyncLoader";
import { requiredInContext } from "@/utils/helpers/requiredInContext";

import { Log } from "@/utils/schema";
import { getLogs, addLog, deleteLog, updateLog } from "@/services/LogsService";

import { useAuth } from "@/hooks/contexts/useAuth";

type LogsContextType = {
  logs: Log[];
  loading: boolean;
  reload_logs: () => Promise<void>;
  add_log: ({
    skill_id,
    description,
  }: {
    skill_id: number;
    description: string;
  }) => Promise<boolean>;
  delete_log: (log_id: number) => Promise<boolean>;
  update_log: ({
    log_id,
    description,
  }: {
    log_id: number;
    description: string;
  }) => Promise<boolean>;
  find_log: (skill_id: number) => Log | undefined;
};

export const LogsContext = createContext<LogsContextType>({
  logs: [],
  loading: true,
  reload_logs: requiredInContext("Logs", "reload_logs"),
  add_log: requiredInContext("Logs", "add_log"),
  delete_log: requiredInContext("Logs", "delete_log"),
  update_log: requiredInContext("Logs", "update_log"),
  find_log: requiredInContext("Logs", "find_log"),
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

  const findLog = (skill_id: number) => {
    return logs.find((l) => l.skill_id === skill_id);
  };

  const add_log = async ({
    skill_id,
    description,
  }: {
    skill_id: number;
    description: string;
  }) => {
    if (!userId) return false;

    const tempId = Date.now();
    const optimisticLog: Log = {
      id: tempId,
      skill_id,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    };

    setLogs((prev) => [...prev, optimisticLog]);

    const data = await addLog({ user_id: userId, skill_id, description });

    if (!data) {
      console.error("add_log failed — rolling back");
      setLogs((prev) => prev.filter((l) => l.id !== tempId));
      return false;
    }

    // Replace temp with real
    setLogs((prev) => prev.map((l) => (l.id === tempId ? data : l)));

    return true;
  };

  const delete_log = async (log_id: number) => {
    if (!userId) return false;

    const oldLogs = logs;
    setLogs((prev) => prev.filter((l) => l.id !== log_id));

    const data = await deleteLog({ user_id: userId, log_id });
    if (!data) {
      console.error("delete_log failed — rolling back");
      setLogs(oldLogs);
      return false;
    }

    return true;
  };

  const update_log = async ({
    log_id,
    description,
  }: {
    log_id: number;
    description: string;
  }) => {
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
        find_log: findLog,
      }}
    >
      {children}
    </LogsContext.Provider>
  );
};
