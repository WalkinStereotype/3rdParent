import SkillsSection from "@/components/shared/SkillsSection";
import { useNavigate } from "react-router-dom";

import StarButton from "@/components/shared/skill-buttons/StarButton";
import RemoveButton from "@/components/shared/skill-buttons/RemoveButton";

import { useSkills, useTodos } from "@/hooks/contexts";
import { Skill } from "@/utils/schema";
import DoneButton from "@/components/shared/skill-buttons/DoneButton";

export default function Home() {
  const navigate = useNavigate();
  const { skills, reload_skills, loading: skillsLoading } = useSkills();
  const { todos, reload_todos, loading: todosLoading } = useTodos();

  const homePageLoading = skillsLoading || todosLoading || skills.length == 0;

  const todoSkills = homePageLoading
    ? []
    : todos
        .filter(({ is_priority }) => is_priority)
        .map(({ skill_id }) => skills.find(({ id }) => id === skill_id)!);

  const renderActions = (s: Skill) => (
    <div className="flex-display">
      <DoneButton onClick={() => navigate(`/skills/${s.id}?write=true`)} />
    </div>
  );

  return (
    <div>
      <SkillsSection
        title={"In Progress..."}
        skills={todoSkills}
        renderActions={(s) => renderActions(s)}
        emptyText="Find skills to do in the Skills page!"
        loading={homePageLoading}
      />
    </div>
  );
}
