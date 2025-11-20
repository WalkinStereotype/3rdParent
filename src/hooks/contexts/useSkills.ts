import { useContext } from "react";
import { SkillsContext } from "@/contexts";

export const useSkills = () => useContext(SkillsContext);
