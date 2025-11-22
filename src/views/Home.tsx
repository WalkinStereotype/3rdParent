import SkillsSection from "@/components/shared/SkillsSection";

import StarButton from "@/components/shared/skill-buttons/StarButton";
import RemoveButton from "@/components/shared/skill-buttons/RemoveButton";

import { useSkills } from "@/hooks/contexts/useSkills";
import { useTodos } from "@/hooks/contexts/useTodos";
import { Skill } from "@/utils/schema";
import DoneButton from "@/components/shared/skill-buttons/DoneButton";

export default function Home() {
  const { skills, reload_skills, loading: skillsLoading } = useSkills();
  const { todos, reload_todos, loading: todosLoading } = useTodos();

  const homePageLoading = skillsLoading || todosLoading;

  const todoSkills = todos
    .filter(({ is_priority }) => is_priority)
    .map(({ skill_id }) => skills.find(({ id }) => id === skill_id)!);

  const renderActions = (s: Skill) => (
    <div className="flex-display">
      <DoneButton onClick={() => console.log("Done Pressed!")} />
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
