import { Skill, Todo } from "@/utils/schema";

import SkillsSection from "@/components/shared/SkillsSection";
import SaveButton from "@/components/shared/skill-buttons/SaveButton";

import { useSkills } from "@/hooks/contexts/useSkills";
import { useTodos } from "@/hooks/contexts/useTodos";

export default function Skills() {
  const { skills, reload_skills, loading: skillsLoading } = useSkills();
  const { todos, reload_todos, toggle_todo, loading: todosLoading } = useTodos();

  const safeToggleTodo = (skill_id: number) => {
    toggle_todo
      ? toggle_todo(skill_id)
      : console.error("No toggle-todo function found");
  };

  const skillsPageLoading = skillsLoading || todosLoading;

  const renderActions = (s: Skill) => (
    <div>
      <SaveButton
        onClick={() => safeToggleTodo(s.id)}
        isPriority={todos.some((t) => t.skill_id === s.id)}
      />
    </div>
  );

  return (
    <div>
      <SkillsSection
        title="Skills"
        skills={skills}
        renderActions={renderActions}
        emptyText="There may be a problem, refresh the page?"
        loading={skillsPageLoading}
      />
    </div>
  );
}
