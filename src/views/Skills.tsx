import { useState } from "react";

import { Skill } from "@/utils/schema";

import SkillsSection from "@/components/shared/SkillsSection";
import SaveButton from "@/components/shared/skill-buttons/SaveButton";
import CategorySelector from "@/components/shared/CategorySelector";

import { useSkills, useLogs, useTodos } from "@/hooks/contexts";

export default function Skills() {
  const {
    skills,
    categories,
    reload_skills,
    reload_categories,
    loading: skillsLoading,
  } = useSkills();
  const { find_log, reload_logs, loading: logsLoading } = useLogs();
  const {
    reload_todos,
    toggle_todo,
    loading: todosLoading,
    is_todo,
  } = useTodos();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hideLogged, setHideLogged] = useState(true);
  const [hideHidden, setHideHidden] = useState(true);

  const skillsPageLoading =
    skillsLoading || todosLoading || logsLoading || skills.length == 0;

  const filteredSkills = selectedCategory
    ? skills.filter(({ category }) => category === selectedCategory)
    : skills;

  const renderActions = (s: Skill) =>
    find_log(s.id) ? (
      <p>Completed</p>
    ) : (
      <div>
        <SaveButton
          onClick={() => toggle_todo(s.id)}
          isPriority={is_todo(s.id)}
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
