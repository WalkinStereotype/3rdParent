import { supabase } from "@/lib/supabase";
import { Skill } from "@/utils/schema";

export const getSkills = async (id: string) => {
  const { data, error } = await supabase.rpc("get_skills", {
    user_id: id,
  });

  if (error || !data) {
    console.error("Error fetching skills:", error?.message);
    return [];
  }

  return data as Skill[];
};

export const addSkill = async (
  created_by: string,
  name: string,
  description: string
) => {
  const { data, error } = await supabase.rpc("add_skill", {
    creator: created_by,
    skill_name: name,
    skill_description: description,
  });

  if (error) {
    console.error("Error adding skill", error.message);
    return null;
  }

  return data as Skill;
};

export const deleteSkill = async (created_by: string, skill_id: number) => {
  const { data, error } = await supabase
    .from("skills")
    .delete()
    .match({
      created_by: created_by,
      skill_id: skill_id,
    })
    .select();

  if (error) {
    console.error("Error deleteing skill:", error.message);
    return null;
  }

  console.log(data);
  return data;
};
