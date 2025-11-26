import { useContext } from "react";
import { LogsContext } from "@/contexts";

export const useLogs = () => useContext(LogsContext);