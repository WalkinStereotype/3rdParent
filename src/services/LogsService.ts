import { Log } from "@/utils/schema";
import {
  getLogs as dbGetLogs,
  addLog as dbAddLog,
  deleteLog as dbDeleteLog,
  updateLog as dbUpdateLog,
} from "@/supabase-api/logs";

export const getLogs = async (user_id: string): Promise<Log[]> => {
  return await dbGetLogs(user_id);
};

export const addLog = async ({
  user_id,
  skill_id,
  description,
}: {
  user_id: string;
  skill_id: number;
  description: string;
}): Promise<Log | null> => {
  return await dbAddLog({ user_id, skill_id, description });
};

export const deleteLog = async ({
  user_id,
  log_id,
}: {
  user_id: string;
  log_id: number;
}) => {
  return await dbDeleteLog({ user_id, log_id });
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
  return await dbUpdateLog({
    user_id,
    log_id,
    description,
  });
};
