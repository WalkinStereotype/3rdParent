import React, { createContext, useEffect, useState } from "react";
import { useSharedAsyncLoader } from "@/hooks/asyncLoaders/useSharedAsyncLoader";

import { Skill } from "@/utils/schema";
import { getSkills, addSkill, deleteSkill } from "@/services/SkillsService";
import { getCategories } from "@/services/CategoriesService";

import { useAuth } from "@/hooks/contexts/useAuth";

type SkillsContextType = {
  skills: Skill[];
  categories: string[];
  loading: boolean;
  reload_skills: (() => Promise<void>) | null;
  reload_categories: (() => Promise<void>) | null;
  add_skill: ((name: string, description: string) => Promise<boolean>) | null;
  delete_skill: ((skillId: number) => Promise<boolean>) | null;
  find_skill: ((skillId: number) => Skill | null) | null;
};

export const SkillsContext = createContext<SkillsContextType>({
  skills: [],
  categories: [],
  loading: true,
  reload_skills: null,
  reload_categories: null,
  add_skill: null,
  delete_skill: null,
  find_skill: null,
});

export const SkillsProvider = ({ children }: { children: React.ReactNode }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingCount, setLoadingCount] = useState(0);
  const loading = loadingCount > 0;
  const setLoading = (v: boolean) => setLoadingCount((c) => (v ? 1 : -1));

  const { user } = useAuth();
  const userId = user?.id;

  const load_skills = useSharedAsyncLoader(async () => {
    if (!userId) return;
    const result = await getSkills(userId);
    setSkills(result);
  }, setLoading);

  const load_categories = useSharedAsyncLoader(async () => {
    if (!userId) return;
    const result = await getCategories();
    setCategories(result);
  }, setLoading);

  const add_skill = async (name: string, description: string) => {
    if (!userId) return false;
    setLoading(true);
    const data = await addSkill(userId, name, description);
    if (!data) {
      setLoading(false);
      return false;
    }
    setSkills((prev) => [
      ...prev,
      { id: data.id, category: "custom", name, description },
    ]);
    setLoading(false);
    return true;
  };

  const delete_skill = async (skillId: number) => {
    if (!userId) return false;
    setLoading(true);
    const data = await deleteSkill(userId, skillId);
    if (!data) {
      setLoading(false);
      return false;
    }
    setSkills((prev) => prev.filter((s) => s.id !== skillId));
    setLoading(false);
    return true;
  };

  const find_skill = (skillId: number) => {
    const skillOf = skills.find(({ id }) => id === skillId);

    return skillOf ? skillOf : null;
  };

  useEffect(() => {
    load_skills();
    load_categories();
  }, [userId]);

  return (
    <SkillsContext.Provider
      value={{
        skills,
        categories,
        loading,
        reload_skills: load_skills,
        reload_categories: load_categories,
        add_skill,
        delete_skill,
        find_skill,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};
