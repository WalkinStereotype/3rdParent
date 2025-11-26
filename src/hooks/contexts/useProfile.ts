import { useContext } from "react";
import { ProfileContext } from "@/contexts";

export const useProfile = () => useContext(ProfileContext);