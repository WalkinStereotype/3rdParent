import { Link, useParams } from "react-router-dom";
import { useSkills, useLogs, useTodos } from "@/hooks/contexts";

import SkillExpanded from "@/components/skillDetail/SkillExpanded";
import ResourceList from "@/components/skillDetail/ResourceList";
import BackButton from "@/components/shared/BackButton";

export default function SkillDetails() {
  const { id } = useParams();
  const {
    skills,
    categories,
    reload_skills,
    reload_categories,
    loading: skillsLoading,
  } = useSkills();
  const { logs, reload_logs, loading: logsLoading } = useLogs();
  const {
    toggle_todo,
    loading: todosLoading,
  } = useTodos();

  if (!id) {
    return <p>UNDEFINED</p>;
  }

  const skill_id = Number(id);
  const skill = skills.find((s) => s.id === skill_id);
  if (!skill) {
    return <p>UNDEFINED</p>;
  }

  return (
    <div>
      <BackButton to="/skills"/>
      <SkillExpanded
        id={skill_id}
        name={skill.name}
        type={skill.category}
        description={skill.description}
      >
        Resources here
      </SkillExpanded>

      {}
    </div>
  );
}
