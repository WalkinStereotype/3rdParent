import { useState } from "react";

import { Skill } from "@/utils/schema";

import SkillsSection from "@/components/shared/SkillsSection";
import SaveButton from "@/components/shared/skill-buttons/SaveButton";
import CategorySelector from "@/components/shared/CategorySelector";

import { useSkills } from "@/hooks/contexts/useSkills";
import { useTodos } from "@/hooks/contexts/useTodos";

export default function Skills() {
  const {
    skills,
    categories,
    reload_skills,
    reload_categories,
    loading: skillsLoading,
  } = useSkills();
  const {
    todos,
    reload_todos,
    toggle_todo,
    loading: todosLoading,
  } = useTodos();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const safeToggleTodo = (skill_id: number) => {
    toggle_todo
      ? toggle_todo(skill_id)
      : console.error("No toggle-todo function found");
  };

  const skillsPageLoading = skillsLoading || todosLoading;

  const filteredSkills = selectedCategory
    ? skills.filter(({ category }) => category === selectedCategory)
    : skills;

  const renderActions = (s: Skill) => (
    <div>
      <SaveButton
        onClick={() => safeToggleTodo(s.id)}
        isPriority={todos.some((t) => t.skill_id === s.id)}
      />
    </div>
  );

  const emptyText =
    selectedCategory === "custom"
      ? "Add your own skills now!"
      : "There may be a problem, refresh the page?";

  return (
    <div>
      <SkillsSection
        title="Skills"
        skills={filteredSkills}
        renderActions={renderActions}
        emptyText={emptyText}
        loading={skillsPageLoading}
        filters={
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onTagPress={setSelectedCategory}
          />
        }
      />
    </div>
  );
}
