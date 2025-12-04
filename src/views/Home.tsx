import SkillsSection from "@/components/shared/SkillsSection";
import { useNavigate } from "react-router-dom";

import RemoveButton from "@/components/shared/skill-buttons/RemoveButton";

import { useSkills, useLogs, useTodos } from "@/hooks/contexts";
import { Skill } from "@/utils/schema";
import DoneButton from "@/components/shared/skill-buttons/DoneButton";

export default function Home() {
  const navigate = useNavigate();
  const { skills, reload_skills, loading: skillsLoading } = useSkills();
  const { logs, reload_logs, loading: logsLoading } = useLogs();
  const { todos, reload_todos, loading: todosLoading } = useTodos();

  const homePageLoading =
    skillsLoading || logsLoading || todosLoading || skills.length == 0;

  const todoSkills = homePageLoading
    ? []
    : todos
        .filter(({ is_priority }) => is_priority)
        .map(({ skill_id }) => skills.find(({ id }) => id === skill_id)!);

  const recentLogSkills = homePageLoading
    ? []
    : logs
        .slice(0, 3)
        .map(({ skill_id }) => skills.find(({ id }) => id === skill_id)!);

  const renderInProgressActions = (s: Skill) => (
    <div className="flex-display">
      <DoneButton onClick={() => navigate(`/skills/${s.id}?write=true`)} />
    </div>
  );

  return (
    <div>
      <SkillsSection
        title={"In Progress..."}
        skills={todoSkills}
        renderActions={(s) => renderInProgressActions(s)}
        emptyText="Find skills to do in the Skills page!"
        loading={homePageLoading}
      />
      <SkillsSection
        title={"Recent Accomplishments"}
        skills={recentLogSkills}
        emptyText="Nothing learned yet, get started right now!"
        loading={homePageLoading}
      />
    </div>
  );
}
