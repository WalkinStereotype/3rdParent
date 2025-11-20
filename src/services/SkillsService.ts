import { Skill } from "@/utils/schema";
import {
  getSkills as dbGetSkills,
  addSkill as dbAddSkill,
  deleteSkill as dbDeleteSkill,
} from "@/supabase-api/skills";

export const getSkills = async (id: string): Promise<Skill[]> => {
  return await dbGetSkills(id);
};

export const addSkill = async (
  created_by: string,
  name: string,
  description: string
): Promise<Skill | null> => {
  return await dbAddSkill(created_by, name, description);
};

export const deleteSkill = async (created_by: string, skill_id: number) => {
  return await dbDeleteSkill(created_by, skill_id);
};
